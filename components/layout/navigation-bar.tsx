import React from "react";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/main">상품 페이지</Link>
          </li>
          <li>
            <Link href="/reservations">예약</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
