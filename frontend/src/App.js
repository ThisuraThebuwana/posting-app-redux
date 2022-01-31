import './App.css';
import Dashboard from './components/modules/dashboard/Dashboard';
import NavBar from './components/ui-components/NavBar';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
