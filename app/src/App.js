import GlobalStyles from './theme';
import Layout from './containers/Layout';
import Statement from 'pages/Statement';

const App = () => (
  <>
    <GlobalStyles />
    <Layout>
      <Statement />
    </Layout>
  </>
)

export default App
