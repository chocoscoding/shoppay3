import React from "react";
import Ad from "./Ad";
import style from "./styles.module.scss";
import Top from "./Top";
const Index = () => {
  return (
    <header className={style.header}>
      <Ad />
      <Top />
    </header>
  );
};

export default Index;
