import Layout from "../components/layout";
import { getPosts } from "../lib/posts";

export default function Home() {
  return (
    <Layout />
  );
}

export async function getStaticProps() {
  const posts = getPosts();
  return { props: { posts } };
}
