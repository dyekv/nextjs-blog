import React, { useState } from 'react'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'




export default function Post({ postData }) {

    const [name, setName] = useState("")
    const [comment, setComment] = useState("")

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
            <div>
                {"お名前"}<br />
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <p>{name}</p>
                {"コメント"}<br />
                <textarea
                    style={{ width: '100%', height: '100px', resize: 'none' }}
                    placeholder="コメントを入力してください"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)} />
                {comment}
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}