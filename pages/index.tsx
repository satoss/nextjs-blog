import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import styles from '../styles/pages/home.module.scss'
// import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import { client } from '../lib/client'
import Date from '../components/date'
import { GetStaticProps } from 'next'

type Blogs = {
  id: string
  title: string
  createdAt: string
  updatedAt: string
}

export const Home = ({ blogs }: { blogs: Blogs[] }): JSX.Element => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {/* <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul> */}
        <ul className={styles.list}>
          {blogs.map((blog) => (
            <li className={utilStyles.listItem} key={blog.id}>
              <Link href={`/${blog.id}`}>
                <a className={styles.title}>{blog.title}</a>
              </Link>
              <p className={styles.dates}>
                <span>
                  <img src="/images/createdAt.svg" width="16" height="16" />
                  投稿：
                  <Date dateString={blog.createdAt} />
                </span>
                <span>
                  <img src="/images/updatedAt.svg" width="14" height="14" />
                  更新：
                  <Date dateString={blog.updatedAt} />
                </span>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

type PostData = {
  contents: {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    title: string
    body: string
    tags: string[]
  }
  totalCount: number
  offset: number
  limit: number
}

export const getStaticProps: GetStaticProps = async () => {
  // const allPostsData = getSortedPostsData()
  // return {
  //   props: {
  //     allPostsData,
  //   },
  // }
  const postsData: PostData = await client.get({ endpoint: 'blogs' })

  return {
    props: {
      blogs: postsData.contents,
    },
  }
}

export default Home
