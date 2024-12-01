"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import UserMenu from "./UserMenu";

const Top = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [visible, setVisible] = useState(true);
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <FaLocationDot />
            <span>Nigeria / NGN</span>
          </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li className={styles.li}>
            <span>Customer Service</span>
          </li>
          <li className={styles.li}>
            <span>Help</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <Link href="/profile/whishlist">
              <span>Whishlist</span>
            </Link>
          </li>
          <li className={styles.li} onMouseOver={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            {loggedIn ? (
              <div className={styles.li}>
                <div className={styles.flex}>
                  <Image src={"/images/userimg.png"} width={50} height={50} alt="userimg" />
                  <span>Chodara</span>
                  <RiArrowDropDownFill />
                </div>
              </div>
            ) : (
              <div className={styles.li}>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </div>
            )}
            {visible && <UserMenu loggedIn={true} />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Top;
