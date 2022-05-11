import Head from "next/head";
import styles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "raen";
export const siteDescription = "ambitious web3 apps";

export default function Layout({
  children,
  title = siteTitle,
  description = siteDescription,
  author = "",
}) {
  const combinedTitle = `${title}${
    title === siteTitle ? "" : ` • ${siteTitle}`
  }`;
  return (
    <div className={styles.container}>
      <Head>
        <title>{combinedTitle}</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content={description} />
        <meta name="og:title" content={combinedTitle} />
        <meta name="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raen.dev" />
        <meta
          property="og:image"
          content="https://raen.dev/images/logo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {author && <meta name="twitter:creator" content={author} />}
        <meta name="twitter:title" content={combinedTitle} />
      </Head>
      <header className={styles.header}>
        <img
          src={require("../public/images/logo.png")}
          height={144}
          width={259}
          alt=""
        />
        <h1 className={styles.heading2Xl}>{siteDescription}</h1>
      </header>
      <main>{children}</main>
      {title !== siteTitle && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
