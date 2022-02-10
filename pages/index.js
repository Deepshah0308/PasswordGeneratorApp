import { useRouter } from "next/router";
import Language from "../assets/languages.json";
import Head from "next/head";
import styles from "../styles/default.module.css";
import PasswordGenerator from "../Components/PasswordGenerator";

export default function Home() {
  const { locale, locales, asPath } = useRouter();

  const Lang = Language.Home.filter((h) => h.locale === locale);

  return (
    <>
      <Head>
        <title>Gerador de Senha</title>
        <meta
          name="description"
          content="Password generator created with next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.box}>
            <h1 className={styles.title}>{Lang.map((home) => home.title)}</h1>
            <h2 className={styles.description}>
              {Lang.map((home) => home.description)}
            </h2>
            {Lang.map((Home, i) => {
              return <PasswordGenerator key={i} PasswordGenerator={Home} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}
