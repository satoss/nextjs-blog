import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/Foundation.css'
import Date from '../../components/date'
import Layout from '../../components/layout'
import { client } from '../../lib/client'
import styles from './[id].module.scss'

type PostProps = {
  postData: {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    title: string
    body: string
    tags: string[]
  }
}

export const Post: React.FC<PostProps> = ({ postData }) => {
  return (
    <Layout title={postData.title}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={styles.container}>
        <h1>{postData.title}</h1>
        <p className={styles.dates}>
          <span>
            <img src="/images/createdAt.svg" width="16" height="16" />
            投稿：
            <Date dateString={postData.createdAt} />
          </span>
          <span>
            <img src="/images/updatedAt.svg" width="14" height="14" />
            更新：
            <Date dateString={postData.updatedAt} />
          </span>
        </p>

        <br />
        <div
          className={styles.contents}
          dangerouslySetInnerHTML={{ __html: postData.body }}
        />
      </article>
    </Layout>
  )
}

type PostsData = {
  contents: {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    title: string
    body: string
    tags: string[]
  }[]
  totalCount: number
  offset: number
  limit: number
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsData: PostsData = await client.get({ endpoint: 'blogs' })
  const paths = postsData.contents.map((content) => `/posts/${content.id}`)

  return {
    paths,
    fallback: false,
  }
}

type PostData = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  body: string
  tags: string[]
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string | undefined
  const postData: PostData = await client.get({
    endpoint: 'blogs',
    contentId: id,
  })

  const $ = cheerio.load(postData.body)
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  postData.body = $.html()

  return {
    props: {
      postData,
    },
  }
}

export default Post
