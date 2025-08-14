import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../../components/button/Button";
import { notFound } from "next/navigation";
import { items } from "./data.js";

const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }

  return notFound();
};

const Category = async ({ params }) => {
  const resolvedParams = await params;
  const data = getData(resolvedParams.category);
  const categoryName = resolvedParams.category;

  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{categoryName}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.contentTitle}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button url={"/"} text={"Learn More"} className={styles.button} />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={item.image}
              alt="Test Image"
              fill={true}
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
              priority
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
