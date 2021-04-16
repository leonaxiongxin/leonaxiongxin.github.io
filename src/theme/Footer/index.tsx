/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';

import Link from '@docusaurus/Link';
import {useThemeConfig} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';
import ThemedImage, {Props as ThemedImageProps} from '@theme/ThemedImage';
import { IconZhihu, IconDouban, IconGithub, IconLinkedin } from '../Icons';

function FooterLink({to, href, label, name, prependBaseUrlToHref, ...props}: any) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});
  let icon = null;
  switch(name) {
    case 'zhihu':
      icon = <IconZhihu />;
      break;
    case 'douban':
      icon = <IconDouban />;
      break;
    case 'github':
      icon = <IconGithub />;
      break;
    case 'linkedin':
      icon = <IconLinkedin />;
      break;
    default:
      icon = null;
  }

  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {!icon ? label : icon}
    </Link>
  );
}

const FooterLogo = ({
  sources,
  alt,
}: Pick<ThemedImageProps, 'sources' | 'alt'>) => (
  <ThemedImage className="footer__logo" alt={alt} sources={sources} />
);

function Footer(): JSX.Element | null {
  const {footer} = useThemeConfig();

  const {copyright, links = [], logo = {}} = footer || {};
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };

  if (!footer) {
    return null;
  }

  return (
    <footer
      className={clsx('footer', {
        'footer--dark': footer.style === 'dark',
      })}>
      <div className="row">
        {links && links.length > 0 && (
          <div className={clsx("col col--3", styles.footerLeft)}>
            {links.map((linkItem, i) => (
              <div key={i} className="col">
                {linkItem.title != null ? (
                  <h4 className="footer__title">{linkItem.title}</h4>
                ) : null}
                {linkItem.items != null &&
                Array.isArray(linkItem.items) &&
                linkItem.items.length > 0 ? (
                  <ul className={clsx("footer__items", styles.footerItems)}>
                    {linkItem.items.map((item, key) =>
                      item.html ? (
                        <li
                          key={key}
                          className="footer__item"
                          // Developer provided the HTML, so assume it's safe.
                          // eslint-disable-next-line react/no-danger
                          dangerouslySetInnerHTML={{
                            __html: item.html,
                          }}
                        />
                      ) : (
                        <li
                          key={item.href || item.to}
                          className={clsx("footer__item", styles.footerItemLink)}>
                          <FooterLink {...item} />
                        </li>
                      ),
                    )}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        )}
        {(logo || copyright) && (
          <div className={clsx("col col--9 footer__bottom text--center", styles.footerRight)}>
            {logo && (logo.src || logo.srcDark) && (
              <div className="margin-bottom--sm">
                {logo.href ? (
                  <Link href={logo.href} className={styles.footerLogoLink}>
                    <FooterLogo alt={logo.alt} sources={sources} />
                  </Link>
                ) : (
                  <FooterLogo alt={logo.alt} sources={sources} />
                )}
              </div>
            )}
            {copyright ? (
              <div
                className={styles.footerCopyright}
                // Developer provided the HTML, so assume it's safe.
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: copyright,
                }}
              />
            ) : null}
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
