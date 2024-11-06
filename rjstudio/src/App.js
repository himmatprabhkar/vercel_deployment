import './App.css';
import MainRouter from './routes/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
}

export default App;
