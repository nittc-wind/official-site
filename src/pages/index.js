import Layout from '../components/Layout'
import { client } from "../libs/client";
import Seo from '../components/Seo';
import Item from '../components/Item';
import Calendar from '../components/Calendar';
import Social from '../components/Social';

const Index = ({ article }) => {
  return (
      <Layout>
        <Seo pageTitle="豊田高専吹奏楽部" />
        <h2 className='text-xl font-bold my-5'>お知らせ</h2>
        <div>
          <ul className='md:flex'>
            {article.map((article) => (
              <li key={article.id} className='mb-2 md:m-2'>
                  <Item article={article} />
              </li>
            ))}
          </ul>
        </div>
        <h2 className='text-xl font-bold my-5'>練習予定</h2>
        <Calendar />
        <h2 className='text-xl font-bold my-5'>コンタクト</h2>
        <Social />
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
