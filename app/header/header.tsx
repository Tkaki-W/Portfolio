"use client"
import { usePathname } from 'next/navigation';
import {useState, useEffect} from "react";
import styles from "./header.module.css";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";

export function Header() {
  //マウントをする前にルーティングを処理するとエラーが起きるから、レンダリングが終わるまで待つ
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  useEffect(()=>{
    setMounted(true);
  },[])

  return (
    <Navbar fluid rounded className={styles.Navbar}>
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Takaki</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active = {mounted ? pathname === "/" : false}>
          Home
        </NavbarLink>
        <NavbarLink href="/aboutme" active = {mounted ? pathname === "/aboutme": false}>
          About me
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

