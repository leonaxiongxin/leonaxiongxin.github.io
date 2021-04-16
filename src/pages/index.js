import React, { useLayoutEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';


const features = [
  {
    title: 'Front-end Development',
    imageUrl: 'icon/fe.svg',
    redirectUrl: 'blog/tags/fe',
  },
  {
    title: 'Natural Language Processing',
    imageUrl: 'icon/nlp.svg',
    redirectUrl: 'blog/tags/nlp'
  },
  {
    title: 'Database & System',
    imageUrl: 'icon/system.svg',
    redirectUrl: 'blog/tags/os',
  },
  {
    title: 'Life & Thinking',
    imageUrl: 'icon/shot.svg',
    redirectUrl: '/',
  },
];

function Feature({title, imageUrl, redirectUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  const routeUrl = useBaseUrl(redirectUrl);
  return (
    <div className={clsx('col col--3', styles.feature)}>
      {imgUrl && (
        <div className={styles.featureImage}>
          <img src={imgUrl} alt={title} />
        </div>
      )}
      <div className={styles.featureTitle}><a href={routeUrl}>{title}</a></div>
    </div>
  );
}


export default function Home() {
  const [canvasNestInstance, setCanvasNestInstance] = useState(null);
  const [typingInstance, setTypingInstance] = useState(null);
  useLayoutEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }
    if (!canvasNestInstance) {
      import ('canvas-nest.js').then(({ default: CanvasNest }) => {
        const canvasElement = document.getElementsByClassName('main-wrapper')[0];
        const config = {
          zIndex: 0,
          count: 101,
        };
        const cn = new CanvasNest(canvasElement, config);
        setCanvasNestInstance(cn);
      });
    }
    if (!typingInstance) {
      import('typed.js').then(({ default: Typed }) => {
        const options = {
          strings: [`${siteConfig.tagline}`],
          typeSpeed: 60,
        };
        const typing = new Typed('#headerTagline', options);
        setTypingInstance(typing);
      });
    }
  }, []);

  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}
      keywords={`${siteConfig.customFields.keywords}`}
      metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}>
      <header
        id="header"
        className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <h1
            id="headerTitle"
            className={clsx("hero__title", styles.heroBanner__title)}
          >
            {siteConfig.title}
          </h1>
          <span
            id="headerTagline"
            className={clsx("hero__subtitle", styles.heroBanner__tagline)}
          ></span>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
