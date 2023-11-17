
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/styles/main.scss';
import Sidebar from './Components/Sidebar';
import Dashboard from './pages/Dashboard';
import News from './pages/News';
import Performance from './pages/Performance';
import Transaction from './pages/Transaction';
import Settings from './pages/Settings';
import Header from './Components/Header';

function App() {
  return (
   <BrowserRouter>
   <div>

    <Header  />

    <Sidebar />
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/news' element={<News />} />
      <Route path='/performance' element={<Performance />} />
      <Route path='/transaction' element={<Transaction />} />
      <Route path='/setting' element ={<Settings />} />
    </Routes>
   </div>
   
   
   </BrowserRouter>
  );
}

export default App;
