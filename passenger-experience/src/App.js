import { Route, Routes } from 'react-router-dom';
import { Comfort, Entertainment, Home } from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/entertainment' element={<Entertainment />} />
      <Route path='/comfort' element={<Comfort />} />
    </Routes>
  );
}

export default App;
