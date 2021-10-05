import classes from './hero.module.css';

import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/profile.png" alt="An image of myself" width={300} height={300} />
      </div>
      <h1>Hi, I'm Luka</h1>
      <p>I blog about web development - especially frontend frameworks like React and Next.js</p>
    </section>
  );
};

export default Hero;
