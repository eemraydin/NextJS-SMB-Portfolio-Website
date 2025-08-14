import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
          fill={true}
          className={styles.image}
          alt="Photo by fauxels from Pexels: https://www.pexels.com/photo/people-working-in-front-of-the-computer-3184357/"
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>We build amazing web applications.</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Our Story</h1>
          <p className={styles.desc}>
            We started our journey in 2020 with a vision to innovate and
            simplify web development. Since then, we have grown into a team of
            skilled professionals who are committed to excellence.lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Our Values</h1>
          <p className={styles.imgDesc}>
            We believe in integrity, collaboration, and continuous learning. Our
            values guide us in every project we undertake, ensuring we deliver
            the best results for our clients.
            <br />
            <br />- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod - tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br /> - Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi
          </p>
          <Button url="/contact" text="Contact"></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
