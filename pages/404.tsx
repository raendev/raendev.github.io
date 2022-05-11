import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout"
import styles from "../styles/utils.module.css";

export default function Custom404() {
  return (
    <Layout title="404">
      <p>Page not found. Not sure what happened here. Sorry.</p>
    </Layout>
  );
}
