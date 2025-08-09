"use client"

import styles from "./page.module.css";
import {BlobBackground} from "./top_page/top_page";
import {History} from "./history/history";
import {Product} from "./product/product";

// app/page.tsx
export default function HomePage() {
  return(
      <div className={styles.main}>
          <BlobBackground />
          <History/>
          <Product/>
      </div>
  );
}