import classes from './post-content.module.css';

import PostHeader from './post-header';

const DUMMY_POST = {
  title: 'Darrell Paul',
  image: 'post.jpg',
  content: '# This is a first post',
  date: '2021-01-20T05:22:10+01:00',
  slug: 'some-slug-example-2',
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
};

export default PostContent;
