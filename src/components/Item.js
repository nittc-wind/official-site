import Link from "next/link";

export default function Item({article}) {
  return (
    <Link href={`/article/${article.id}`}>
    <div className="w-80 md:w-64 border-solid	border-2">
      <img
        src={article.eye_catch.url}
        alt="サムネイル"
      />
      <h3 className="font-bold">{article.title}</h3>
      <p>{article.updatedAt.slice(0, 10)}</p>
    </div>
    </Link>
  )
}