// app/layout.tsx
import {Header} from "./header/header.tsx";
import {Component} from "./footer/footer.tsx";
import styles from "./page.module.css";
import "./globals.css"; 


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={styles.html}>
      <body className={styles.body}>
        <header>
          <Header/>
        </header>
        <main>{children}</main>
        <footer>
          <Component />
        </footer>
      </body>
    </html>
  )
}