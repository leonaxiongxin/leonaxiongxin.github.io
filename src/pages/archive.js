import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.scss';


/** @type {Array<{ date: string; formattedDate: string; title: string; permalink: string; }>} */
const allPosts = ((ctx) => {
  const keys = ctx.keys();
  const values = keys.map(ctx);
  return keys.reduce((blogposts, filename, i) => {
    const module = values[i];
    // console.log(module)
    const { date, formattedDate, title, permalink } = module.metadata;
    return [
      ...blogposts,
      {
        // filename,
        date,
        formattedDate,
        title,
        permalink,
      },
    ];
  }, []);
})(require.context("../../blog", false, /.md/));


const postsByYear = allPosts.reduceRight((posts, post) => {
  const year = post.date.split("-")[0];
  const yearPosts = posts.get(year) || [];
  return posts.set(year, [post, ...yearPosts]);
}, new Map());


const yearsOfPosts = Array.from(postsByYear, ([year, posts]) => ({
  year,
  posts,
}));

const yearsOfPostsByMonth = yearsOfPosts.map(({
  year, posts
}) => {
  const postsByMonth = posts.reduceRight((posts, post) => {
    const month = post.formattedDate.split(" ")[0];
    const monthPosts = posts.get(month) || [];
    return posts.set(month, [post, ...monthPosts])
  }, new Map());
  const monthOfPosts = Array.from(postsByMonth, ([month, posts]) => ({
    month, posts
  }));
  return {
    year,
    postList: monthOfPosts,
  };
});


function Year(
  /** @type {{ year: string; postList: { month: string, posts: Array<{ date: string; formattedDate: string; title: string; permalink: string; }}>}} */ {
    year,
    postList,
  }
) {
  return (
    <div className="col col--6">
      <h3 className={styles.archiveYearName}>{year}</h3>
      {postList.map(({ month, posts}) => <Month key={`${year}-${month}`} month={month} posts={posts} />)}
    </div>
  );
}

function Month ({
  month, posts
}) {
  return (
    <div className={styles.archiveFeature}>
      <h4 className={styles.archiveMonthName}>{month}</h4>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.date}>
              <Link to={post.permalink}>
                {post.formattedDate} - {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


function BlogArchive() {
  return (
    <Layout title="Blog Archive">
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx("hero__title", styles.heroBanner__title)}>Archive</h1>
        </div>
      </header>
      <main>
        {yearsOfPostsByMonth && yearsOfPostsByMonth.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className={clsx("row")}>
                {yearsOfPostsByMonth.map(({ year, postList}) => (
                  <Year key={year} year={year} postList={postList} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default BlogArchive;
