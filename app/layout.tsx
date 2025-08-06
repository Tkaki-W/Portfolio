// app/layout.tsx
import {header} from "./header.tsx"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header>{
          header()
        }</header>
        <main>{children}</main>
        <footer>共通フッター</footer>
      </body>
    </html>
  )
}