import Layout from '../../components/layout'
//make sure you dont import things and dont use them,like getSortedPostData, because 'fs' was added to the browser bundle
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'


export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

//hey Next, these are the possible id's
export async function getStaticPaths() {
    const paths = getAllPostIds();
    console.log({
      paths,
      fallback: false
  })
    return {
        paths,
        fallback: false
    }
}

//access the router, get the id, and get the medatada for that post
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
      props: {
        postData
      }
    }
}


  
