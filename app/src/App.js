import GlobalStyles from './theme';
import Layout from './containers/Layout';
import Statement from 'pages/Statement';
import useFetch from 'use-http';
import { useCallback, useEffect, useState } from 'react';
import SummaryContext from 'providers/SummaryProvider';

const App = () => {
  const { get, response, loading, error } = useFetch('http://localhost:8000')

  const [data, setData] = useState(null)
  const [filter, setFilter] = useState('all')

  const fetchData = useCallback(async () => {
    const initialData = await get('/data')
    if (response.ok) setData(initialData.results)
  }, [get, response])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <>
      <GlobalStyles />
      <Layout>
        <SummaryContext.Provider value={{ data, loading, error, filter, setFilter }}>
          <Statement />
        </SummaryContext.Provider>
      </Layout>
    </>
  )
}
export default App
