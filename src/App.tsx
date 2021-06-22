import { BrowserRouter, Route } from 'react-router-dom';
import { NewRoom } from './pages/NewRoom';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={HomePage} exact />
      <Route path="/rooms/news" component={NewRoom} />
    </BrowserRouter>
  );
}

export default App;
