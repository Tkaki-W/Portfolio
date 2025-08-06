// app/layout.tsx
import {header} from "./header/header.tsx";
import styles from "./page.module.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={styles.body}>
        <header>{
          header()
        }</header>
        <main>{children}</main>
        <footer>共通フッター</footer>
      </body>
    </html>
  )
}