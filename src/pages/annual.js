import Layout from '../components/Layout'

const Annual = () => {
  return (
    <Layout pagetitle = "年間予定">
        <p>2026年度の予定</p>
        <table align='center'>
          <tbody>
            <tr>
              <th>月</th>
              <th>内容</th>
            </tr>
            <tr>
              <td>4月</td>
              <td>入学式での演奏</td>
            </tr>
            <tr>
              <td>5月</td>
              <td>ガーデニングフェスタでの演奏</td>
            </tr>
            <tr>
              <td>6月</td>
              <td>壮行会での演奏、猿投台交流館での演奏</td>
            </tr>
            <tr>
              <td>7月</td>
              <td>浄水交流館での演奏</td>
            </tr>
            <tr>
              <td>9月</td>
              <td>訪問演奏</td>
            </tr>
            <tr>
              <td>11月</td>
              <td>こうよう祭での演奏</td>
            </tr>
            <tr>
              <td>1月</td>
              <td>定期演奏会</td>
            </tr>
            <tr>
              <td>3月</td>
              <td>卒業式での演奏</td>
            </tr>
          </tbody>
        </table>
    </Layout>
  )
}

export default Annual