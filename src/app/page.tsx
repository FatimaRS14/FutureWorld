"use client"

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  console.log('Hello World')

  return (
    <main className={styles.main}>
      <h1>Hello World</h1>
    </main>
  );
}
