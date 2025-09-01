// app/layout.tsx
import { Analytics } from "@vercel/analytics/next"
import {Header} from "./header/header";
import {Component} from "./footer/footer";
import styles from "./page.module.css";
import "./globals.css"; 


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={styles.html}>
      <body className={styles.body}>
        <header>
          <Header/>
        </header>
        <main>
          {children}
          <Analytics />  
        </main>
        <footer>
          <Component />
        </footer>
      </body>
    </html>
  )
}