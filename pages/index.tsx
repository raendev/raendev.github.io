import Link from "next/link";
import Date from "../components/date";
import Layout, { siteDescription } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getPosts } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>
          Visit us on{" "}
          <a
            href="https://github.com/raendev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </section>
      {posts.length > 0 && (
        <section className={`${utilStyles.headingMd}`}>
          <h2 className={utilStyles.headingLg}>Recent posts</h2>
          <ul className={utilStyles.list}>
            {posts.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getPosts();
  return { props: { posts } };
}
