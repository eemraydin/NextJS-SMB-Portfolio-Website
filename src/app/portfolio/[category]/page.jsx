import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../components/button/Button";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.contentTitle}>Test</h1>
          <p className={styles.desc}>
            This is a test paragraph for the {params.category} category.
          </p>
          <Button url={"/"} text={"Learn More"} className={styles.button} />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/main.jpg"
            alt="Test Image"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.contentTitle}>Test</h1>
          <p className={styles.desc}>
            This is a test paragraph for the {params.category} category.
          </p>
          <Button url={"/"} text={"Learn More"} className={styles.button} />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/main.jpg"
            alt="Test Image"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
