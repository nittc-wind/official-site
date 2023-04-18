import Layout from '../components/Layout'
import { client } from "../libs/client";
import Seo from '../components/Seo';
import Item from '../components/Item';
import Calendar from '../components/Calendar';
import Social from '../components/Social';
import Link from 'next/link';

const Index = ({ article }) => {
  const urlGoogleCal = "https://calendar.google.com/calendar/embed?src=d94109cf325d4d56e437d3e81e5ce206311f552bf1967da2ccf92653897e6c29%40group.calendar.google.com&ctz=Asia%2FTokyo";
  const urlICal = "https://calendar.google.com/calendar/ical/d94109cf325d4d56e437d3e81e5ce206311f552bf1967da2ccf92653897e6c29%40group.calendar.google.com/public/basic.ics";
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
        <p>部員向け</p>
        <Link 
          className='underline text-blue-600'
          href={urlGoogleCal}>Googleカレンダーに追加</Link>
        <span> / </span>
        <Link 
          className='underline text-blue-600'
          href={urlICal}>iOS標準カレンダーはこちら</Link>
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
