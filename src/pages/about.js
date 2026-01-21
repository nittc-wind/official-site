import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout pageTitle="部活紹介">
      <div className="intro max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-sm">
        <p className="mb-4 text-lg">こんにちは！豊田高専吹奏楽部です。</p>
        <p className="mb-6 text-base text-gray-700">私たちの部活は現在36名で楽しく活動しています。</p>
        <div className="space-y-2 text-gray-800">
          <p><span className="font-semibold">活動内容:</span> 楽器の演奏</p>
          <p><span className="font-semibold">所属部員数:</span> 35人</p>
          <p><span className="font-semibold">活動場所:</span> 多目的ホール、創造工房棟、第一講義棟1階、2階</p>
          <p><span className="font-semibold">活動時間:</span> 16:45-18:30（月~木）、09:00-16:30（土）</p>
          <p><span className="font-semibold">個人の負担:</span> 部費:2500円/月,その他消耗品</p>
        </div>
        <div className="mt-4">
          <p className="font-semibold mb-2">活動実績</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
            <li>吹奏楽コンクール大学の部　銀賞</li>
            <li>定期演奏会</li>
            <li>入学式、卒業式など式典での演奏</li>
            <li>こうよう祭での演奏</li>
            <li>養護施設や交流館での訪問演奏</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
export default About