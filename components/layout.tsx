import Head from "next/head";
import styles from "../styles/utils.module.css";

export const siteTitle = "RAEN";
export const siteDescription = "RAEN makes it easy to explore contracts on NEAR. Just build with `raen` and try it!";

export default function Layout({
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
        <meta property="og:url" content="https://raen.dev/admin" />
        <meta
          property="og:image"
          content="https://raen.dev/admin/social-banner.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {author && <meta name="twitter:creator" content={author} />}
        <meta name="twitter:title" content={combinedTitle} />
        <meta httpEquiv="refresh" content="0; url='https://raen.dev/admin'" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.heading2Xl}>Redirecting to RAEN Admin...</h1>
      </header>
    </div>
  );
}
