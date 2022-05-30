import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>what-should-I-eat</title>
        <meta name='description' content='what-should-I-eat' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div>Hello</div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src='/wyatt_logo.png'
              alt='Wyatt Logo'
              width={16}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
