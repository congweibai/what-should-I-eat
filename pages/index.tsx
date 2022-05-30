import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const navigation = [{ name: "Random Pick", href: "#" }];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>what-should-I-eat</title>
        <meta name='description' content='what-should-I-eat' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='bg-indigo-600'>
        <nav
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
          aria-label='Top'
        >
          <div className='w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none'>
            <div className='flex items-center'>
              <span>
                <span className='sr-only'>What-Should-I-Eat</span>
                <img
                  className='h-10 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-mark.svg?color=white'
                  alt=''
                />
              </span>
              <div className='hidden ml-10 space-x-8 lg:block'>
                {navigation.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className='text-base font-medium text-white hover:text-indigo-50'
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            {/* <div className='ml-10 space-x-4'>
              <a
                href='#'
                className='inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75'
              >
                Sign in
              </a>
              <a
                href='#'
                className='inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50'
              >
                Sign up
              </a>
            </div> */}
          </div>
          <div className='py-4 flex flex-wrap justify-center space-x-6 lg:hidden'>
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='text-base font-medium text-white hover:text-indigo-50'
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

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
