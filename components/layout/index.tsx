import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import BreadCrumb from '../breadcrumb'
import styles from './styles.module.scss'

export const siteTitle = 'fe-life'

export type LayoutProps = {
  children: React.ReactNode
  title?: string
  home?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, title, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <h1>fe-life</h1>
          </a>
        </Link>
        <p>フロントエンドエンジニアの技術ブログ</p>
      </header>
      {!home && (
        <BreadCrumb
          list={[
            {
              text: 'HOME',
              path: '/',
            },
            {
              text: title!,
            },
          ]}
        />
      )}
      <main className={styles.main}>
        <article className={styles.article}>{children}</article>
        <div className={styles.sidenav}>
          <div className={styles.profile}>
            <h6>プロフィール</h6>
            <div className={styles.profileWrap}>
              <div className={styles.leftItem}>
                <div className={styles.profileImg}>
                  <Image
                    src="/images/profile.jpeg"
                    width={80}
                    height={80}
                    alt="プロフィール画像"
                  />
                </div>
                <p className={styles.name}>しょうえい</p>
              </div>
              <p className={styles.description}>
                フリーランスエンジニアのしょうえいです。
                <br />
                主にフロントエンド周りの技術について備忘録も兼ねて書き留めていく予定です。
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© 2021 fe-life.</p>
      </footer>
    </div>
  )
}

export default Layout
