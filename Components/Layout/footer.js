import { useRouter } from "next/router";
import Language from "/assets/languages.json";
import styles from './footer.module.css'
import Link from "next/link"

export default function Footer() {
    const { locale, locales, asPath } = useRouter();

    const Lang = Language.Home.filter((h) => h.locale === locale);
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.lang_box}>
                    {locales.map((l, i) => {
                        return (
                            <span key={i} className={l === locale ? styles.languageSelected : styles.language}>
                                <Link href={asPath} locale={l}>
                                    {l}
                                </Link>
                            </span>
                        )
                    })}
                </div>
                <a
                    href="https://github.com/Deepshah0308"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {Lang.map((Home) => Home.footerCopyright)}
                </a>
            </div>
        </footer>
    );
}
