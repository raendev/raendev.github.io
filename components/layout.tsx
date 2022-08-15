import Head from "next/head";
import Logo from "../components/logo";

const siteTitle = "RAEN";
const siteDescription = "Unlocking fast, ambitious dapp development";

type Props = React.PropsWithChildren<{
  title?: string
  description?: string
  author?: string
}>

export default function Layout({
  title = siteTitle,
  description = siteDescription,
  author = "",
  children
}: Props) {
  const combinedTitle = `${title}${
    title === siteTitle ? "" : ` • ${siteTitle}`
  }`;
  return (
    <div>
      <Head>
        <title>{combinedTitle}</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content={description} />
        <meta name="og:title" content={combinedTitle} />
        <meta name="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raen.dev/admin/" />
        <meta
          property="og:image"
          content="https://raen.dev/admin/social-banner.png"
        />
        <meta property="og:image:alt" content="RAEN Admin: RAEN makes it easy to explore contracts on NEAR. A text input filled with 'your-contract.near'." />
        <meta
          name="twitter:image"
          content="https://raen.dev/admin/social-banner.png"
        />
        <meta name="twitter:image:alt" content="RAEN Admin: RAEN makes it easy to explore contracts on NEAR. A text input filled with 'your-contract.near'." />
        <meta name="twitter:card" content="summary_large_image" />
        {author && <meta name="twitter:creator" content={author} />}
        <meta name="twitter:title" content={combinedTitle} />
      </Head>
      <header style={{ margin: "0 auto", textAlign: "center" }}>
        <Logo />
      </header>
      <main className="container">
        {children}
      </main>
      <footer className="container" style={{
        fontSize: '0.8em',
        padding: 'var(--spacing-l)',
        textAlign: 'center',
      }}>
        <p>made by <a href="https://ahalabs.dev">Aha Labs</a></p>
      </footer>
    </div>
  );
}
