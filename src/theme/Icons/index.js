import React from 'react';
import Zhihu from '@site/static/icon/zhihu.svg';
import Douban from '@site/static/icon/douban.svg';
import Github from '@site/static/icon/github.svg';
import Linkedin from '@site/static/icon/linkedin.svg';
import styles from './styles.module.scss';


export function IconZhihu() {
  return (
    <Zhihu title="知乎" className={styles.icon} />
  )
}

export function IconDouban() {
  return (
    <Douban title="豆瓣" className={styles.icon} />
  )
}

export function IconGithub() {
  return (
    <Github title="Github" className={styles.icon} />
  )
}

export function IconLinkedin() {
  return (
    <Linkedin title="Linkedin" className={styles.icon} />
  )
}
