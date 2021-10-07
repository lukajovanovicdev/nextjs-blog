import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';
import Head from 'next/head';

const AllPostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta name="description" content="A list of all posts about programming" />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
