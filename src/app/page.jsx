import Image from "next/image";
import styles from "./page.module.css";
import Hero from '../../public/hero.png'
import Button from "./components/button/Button";



export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <h1 className={styles.title}>Better design for your products!</h1>
        <p className={styles.description}>Turning your ideas into reality. We bring together the teams from the global tech industry.</p>
        <Button url="/portfolio" text="See Our Work"/>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={Hero}
          alt="Hero Image"
          className={styles.image}
        />
      </div>
    </div>
  );
}
