import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Page({ story, locale, locales, defaultLocale }) {
  story = useStoryblokState(story, { language: locale });

  return (
    <div className={styles.container}>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>{story ? story.name : "My Site"}</h1>
      </header>
      <Layout locale={locale} locales={locales} defaultLocale={defaultLocale}>
        <StoryblokComponent
          blok={story.content}
          locale={locale}
          locales={locales}
          defaultLocale={defaultLocale}
        />
      </Layout>
    </div>
  );
}

export async function getStaticProps({
  params,
  locale,
  locales,
  defaultLocale,
}) {
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version: "draft", // or 'published'
    language: locale,
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      defaultLocale,
      locales,
      locale,
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths({ locale, locales }) {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/");

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    paths.push({ params: { slug: splittedSlug }, locale });
  });

  return {
    paths: paths,
    fallback: false,
  };
}