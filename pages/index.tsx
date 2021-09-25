import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import { client } from '../lib/client'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/pages/home.module.scss'

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
      <section>
        <ul className={styles.list}>
          {blogs.map((blog) => (
            <li className={styles.listItem} key={blog.id}>
              <Link href={`/posts/${blog.id}`}>
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
  const postsData: PostData = await client.get({ endpoint: 'blogs' })

  return {
    props: {
      blogs: postsData.contents,
    },
  }
}

export default Home
