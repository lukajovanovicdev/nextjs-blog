import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';
import Head from 'next/head';

const HomePage = ({ featuredPosts }) => {
  return (
    <>
      <Head>
        <title>Luka's Blog</title>
        <meta name="description" content="I post a new blog about the programming language" />
      </Head>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts,
    },
  };
};

export default HomePage;
