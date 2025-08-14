import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default async function BlogPost({ params }) {
  const receiveParams = await params;
  const getId = receiveParams.id;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${getId}`,
    {
      // next:
      //  {
      //   revalidate: 60, // Revalidate every 60 seconds
      // },
      cache: "no-store", // Disable caching for this request
    }
  );
  const posts = await data.json();
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {posts.title} - {posts.id}
          </h1>
          <p className={styles.desc}>{posts.body}</p>
          <div className={styles.author}>
            <Image
              src="/main.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>name</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/main.jpg" alt="" className={styles.image} fill={true} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          placeat! Quod quas quibusdam nostrum ducimus natus sunt, sit aperiam
          saepe soluta mollitia blanditiis non commodi at labore modi eaque
          debitis!
        </p>
      </div>
    </div>
  );
}
