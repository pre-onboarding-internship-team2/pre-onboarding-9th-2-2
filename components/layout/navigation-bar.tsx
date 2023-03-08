import React from "react";
import Link from "next/link";
import classes from "./navigation-bar.module.css";

const NavigationBar = () => {
  return (
    <header className={classes.navigation__header}>
      <nav className={classes.navigation__nav}>
        <Link href="/main">상품 페이지</Link>
        <Link href="/reservations">예약</Link>
      </nav>
    </header>
  );
};

export default NavigationBar;
