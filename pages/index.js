import Head from "next/head";
import StoryblokClient from "storyblok-js-client";
import styles from "../styles/Home.module.css";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import Layout from "../components/Layout";

export default function Home({ story, data, locale, locales, defaultLocale }) {
  
  story = useStoryblokState(story, {
     customParent: "http://localhost:3000/",
    language: locale,
  });
  
  console.log("data", data)



  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>{/* <h1>{story ? story.name : "My Site"}</h1> */}</header>
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

export async function getStaticProps({ locale, locales, defaultLocale }) {

  const Storyblok = new StoryblokClient({
    oauthToken: "JSy2OVQ3xAKyCANBTC7foAtt-142837-fc7G7oFzxC8bp7qan7Z3",
  });
   

   const res = await Storyblok.get("/spaces/204132/stories/");
    
    let folda = res.data.stories.map((dat)=>{
      return dat.slug;
    })
  let slug = "home";
  let loc = locale;

  let sbParams = {
    version: "draft", // or 'published'
    language: locale,
  };

 

   const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${loc}/${slug}`, sbParams);

  return {
    props: {
      defaultLocale,
      story: data ? data.story : false,
       data: res ? res.data : false,
      key: data ? data.story.id : false,
      // f: folda,
      locale,
      locales,
    },
    revalidate: 3600,
  };
}
