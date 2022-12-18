import Layout from '../components/Layout'
import { client } from "../libs/client";
import Link from "next/link";

const Index = ({ title, article, description }) => {
  return (
      <Layout pageTitle={"豊田高専吹奏楽部"}>
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

/*
export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)
  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
*/

/*
import { client } from "../libs/client";

export default function Home({ article }) {
  return (
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
  );
}

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "article" });

  return {
    props: {
      article: data.contents,
    },
  };
};
*/