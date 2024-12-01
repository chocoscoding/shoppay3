import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

const Ad = () => {
  return (
    <Link href={`/browse`} className={styles.bannerContainer}>
      <Image src={"/images/ad.jpg"} alt="ad banner" width={1920} height={60} className={styles.ad} />
    </Link>
  );
};

export default Ad;
