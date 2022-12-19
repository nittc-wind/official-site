import Layout from '../components/Layout'
import { client } from "../libs/client";
import Link from "next/link";
import Seo from '../components/Seo';

const Index = ({ article }) => {
  return (
      <Layout>
        <Seo pageTitle="豊田高専吹奏楽部" />
        <h2 className='text-xl font-bold'>お知らせ</h2>
        <div>
          <ul>
            {article.map((article) => (
              <li key={article.id}>
                <Link href={`/article/${article.id}`}>
                    <p>{article.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
  )
}
export default Index


// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "article" });

  return {
    props: {
      article: data.contents,
    },
  };
};
