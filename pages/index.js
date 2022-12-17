import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';


export default function Home() {
  return <div className={styles.container}>
    <Head>
      <title>Next Js First Project</title>
    </Head>
    <Link href="/about">About</Link>
    <h1 className={styles.HomeTitle}>Hello World</h1>
  </div>
}
