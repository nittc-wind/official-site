import { client } from "../../libs/client";
import Layout from "../../components/Layout";
import styles from '../../styles/Home.module.scss';

export default function ArticleId({ article }) {
  return (
    <Layout pageTitle={article.title}>
    <main className={styles.main}>
      <h1 className="text-xl font-bold">{article.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: `${article.content}`,
        }}
        className={styles.post}
      />
    </main>
    </Layout>
  );
}

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "article" });

  const paths = data.contents.map((content) => `/article/${content.id}`);
  return { paths, fallback: false };
};
// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "article", contentId: id });

  return {
    props: {
      article: data,
    },
  };
};