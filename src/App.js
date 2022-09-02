import { Route } from 'react-router-dom';
import AllMeetupPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetups';
import FavPage from './pages/Favourites';

function App() {
  return (
    <div>
      <Route path='/'>
        <AllMeetupPage/>
      </Route>
      <Route path='/newmeetup'>
        <NewMeetupPage/>
      </Route>
      <Route path='/favourites'>
        <FavPage/>
      </Route>
    </div>
  );

}

export default App;
