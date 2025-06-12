import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout pageTitle="部活紹介">
      <div intro>
        <p>こんにちは！豊田高専吹奏楽部です。</p> 
        <p>私たちの部活は現在36名で楽しく活動しています。</p>
        <table>
          <tr>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>活動内容</td>
            <td>楽器の演奏</td>
          </tr>
          <tr>
            <td>所属部員数</td>
            <td>35人</td>
          </tr>
          <tr>
            <td>活動場所</td>
            <td>多目的ホール、創造工房棟、第一講義棟1階、2階</td>
          </tr>
          <tr>
            <td>活動時間</td>
            <td>16:45-18:30（（月~木）、09:00-16:30（土）</td>
          </tr>
          <tr>
            <td>個人の負担</td>
            <td>部費:2500円/月,その他消耗品</td>
          </tr>
          <tr>
            <td>活動実績</td>
            <td>
              <ul>
                <li>吹奏楽コンクール大学の部　銀賞</li>
                <li>定期演奏会</li>
                <li>入学式、卒業式など式典での演奏</li>
                <li>こうよう祭での演奏</li>
                <li>養護施設や交流館での訪問演奏</li>
              </ul>
              
            </td>
          </tr>
        </table>
      </div>
    </Layout>
  )
}
export default About