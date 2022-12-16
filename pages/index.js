import Link from "next/link";
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
