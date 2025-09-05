import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Emredev - Blog",
  description:
    "Read the latest articles and updates from Emredev on web development, programming, and technology."
};


export default async function Blog() {
  const data = await fetch("http://localhost:3000/api/posts", {
    // next:
    //  {
    //   revalidate: 60, // Revalidate every 60 seconds
    // },
    cache: "no-store", // Disable caching for this request
  });
  const posts = await data.json();
  return (
    <div className={styles.mainContainer}>
      {posts.map((post) => (
        <Link href={`/blog/${post._id}`} className={styles.container} key={post._id}>
          <div className={styles.imageContainer}>
            <Image
              src={post.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
