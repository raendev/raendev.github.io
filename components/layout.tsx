import Head from "next/head";
import styles from "../styles/utils.module.css";

export const siteTitle = "RAEN 🌧";
export const siteDescription = "A build tool for NEAR smart contracts. The rain in NEAR's desert. More time building, less time copying boilerplate. Fun!";

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
        <meta property="og:url" content="https://raen.dev/" />
        <meta
          property="og:image"
          content="https://raen.dev/admin/social-banner.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {author && <meta name="twitter:creator" content={author} />}
        <meta name="twitter:title" content={combinedTitle} />
        <meta httpEquiv="refresh" content="0; url='https://github.com/raendev/raen#readme'" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.heading2Xl}>Redirecting to source...</h1>
      </header>
    </div>
  );
}
