import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Wello Horld!</h1>
      <Link href="/projects">Projects</Link>
    </main>
  );
}
