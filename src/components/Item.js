export default function Item({article}) {
  return (
    <div className="w-80">
      <img 
        src={article.eye_catch.url}
        alt="サムネイル"
      />
      <h3 className="font-bold">{article.title}</h3>
      <p>{article.updatedAt}</p>
    </div>
  )
}