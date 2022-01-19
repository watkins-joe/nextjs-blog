import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Joe. I'm a Frontend React Developer for a local company in
          Iowa and a Fullstack Software Developer for the apps I'm making on the
          side.
        </p>
      </section>
    </Layout>
  );
}
