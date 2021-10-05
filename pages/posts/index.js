import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  {
    title: 'Darrell Paul',
    image: 'post.jpg',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti accusamus ipsa ducimus libero, a eaque iure nihil quasi provident dolorum ut, magni voluptate cum! Asperiores amet quod nesciunt porro.',
    date: '2021-01-20T05:22:10+01:00',
    slug: 'some-slug-example',
  },
  {
    title: 'Darrell Paul',
    image: 'post.jpg',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti accusamus ipsa ducimus libero, a eaque iure nihil quasi provident dolorum ut, magni voluptate cum! Asperiores amet quod nesciunt porro.',
    date: '2021-01-20T05:22:10+01:00',
    slug: 'some-slug-example-2',
  },
  {
    title: 'Darrell Paul',
    image: 'post.jpg',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti accusamus ipsa ducimus libero, a eaque iure nihil quasi provident dolorum ut, magni voluptate cum! Asperiores amet quod nesciunt porro.',
    date: '2021-01-20T05:22:10+01:00',
    slug: 'some-slug-example-3',
  },
  {
    title: 'Darrell Paul',
    image: 'post.jpg',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti accusamus ipsa ducimus libero, a eaque iure nihil quasi provident dolorum ut, magni voluptate cum! Asperiores amet quod nesciunt porro.',
    date: '2021-01-20T05:22:10+01:00',
    slug: 'some-slug-example-4',
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
