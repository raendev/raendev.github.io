import Layout from "../../components/layout";
import Date from "../../components/date";
import { getPosts, getPost } from "../../lib/posts";
import type { Post } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark as dark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export async function getStaticPaths() {
  const posts = getPosts();
  return {
    paths: posts.map(({ id }) => ({
      params: { id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);
  return {
    props: post,
  };
}

export default function Post() {
  return (
    <Layout />
  );
}
