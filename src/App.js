
import './App.css';
import {BrowserRouter as Router, Switch , Link , Route} from 'react-router-dom'
import CreatePages from './pages/CreatePages';
import Note from './pages/Note';
import { createTheme ,ThemeProvider} from '@material-ui/core'
import Layout from './components/Layout';
const theme=createTheme({
  palette :{
    primary :{
      main:'#6495ED'
    }
  }

})
const App=()=> { 
  return (
    <>
    <ThemeProvider theme={theme}>
        <Router>
        <Layout>
        <Switch>
          
            <Route path="/" exact>
                <Note />
            </Route>
            <Route path="/create">
                <CreatePages />
            </Route>
        </Switch>
        </Layout>
    </Router>
    </ThemeProvider>

      {/* <CreatePages /> */}
    </>
  );
}

export default App;
