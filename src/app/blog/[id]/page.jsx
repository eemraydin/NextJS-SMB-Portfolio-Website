import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const param = await params;
  const post = await getData(param.id);
  return {
    title: `Emredev - ${post.title}`,
    description: post.desc,
  };
}

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store", // Disable caching for this request
  });

  return res.json();
}

const BlogPost = async ({ params }) => {
  const param = await params;
  const data = await getData(param.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title} - {data.id}
          </h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image
              src="/main.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" className={styles.image} fill={true} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
