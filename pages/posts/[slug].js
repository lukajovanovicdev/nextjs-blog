import PostContent from '../../components/posts/post-details/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

const PostDetailsPage = ({ post }) => {
  return <PostContent post={post} />;
};

export const getStaticProps = ({ params }) => {
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default PostDetailsPage;
