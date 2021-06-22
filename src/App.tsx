import { BrowserRouter, Route } from 'react-router-dom';
import { NewRoom } from './pages/NewRoom';
import { HomePage } from './pages/HomePage';

import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" component={HomePage} exact />
        <Route path="/rooms/news" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
