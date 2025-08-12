
import React from 'react'
import styles from "./footer.module.css";
import Image from 'next/image';


function Footer() {

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Image src={"/logoTransparent.png"} alt="logo" width={40} height={40} />
        All rights reserved.
      </div>
      <div>
        <div className={styles.socialIcons}>
          <Image src={"/1.png"} alt="facebook" width={20} height={20} />
          <Image src={"/2.png"} alt="twitter" width={20} height={20} />
          <Image src={"/3.png"} alt="instagram" width={20} height={20} />
          <Image src={"/4.png"} alt="linkedin" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}

export default Footer