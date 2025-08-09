import styles from "./header.module.css";


import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";

export function Header() {
  return (
    <Navbar fluid rounded className={styles.Navbar}>
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Takaki</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#history">History</NavbarLink>
        <NavbarLink href="#product">Product</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

