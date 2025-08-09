"use client"

import styles from "./page.module.css";
import {BlobBackground} from "./top_page/top_page.tsx";
import {History} from "./flamer_motion/page";
import {Product} from "./product/product.tsx";

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