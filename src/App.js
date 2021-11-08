import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllMovies from './pages/AllMovies';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='home'/>
          </Route>
          <Route path='/home'>
              <Home />
          </Route>
          <Route path='/movies' exact>
              <AllMovies />
          </Route>
          <Route path='/movies/:movieSlug'>
              <MovieDetail />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
