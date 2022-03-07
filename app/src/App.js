import { useEffect, useState } from 'react';

import GlobalStyles from './theme';
import Layout from './containers/Layout';
import Statement from 'pages/Statement';
import request from 'utils/fetch';

const App = () => {
  const [data, setData] = useState(null)

  useEffect(() => (
    request(`http://localhost:8000/data`)
      .then(response => {
        setData(response)
        return response
    })
  ), [])

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Statement data={data} />
      </Layout>
    </>
  )
}
export default App
