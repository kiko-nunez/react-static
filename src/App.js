import './App.css';
import Analysis from './components/Analysis';
import Rating from './components/Rating';
import Reviews from './components/Reviews';
import Sidebar from './components/Sidebar'
import Visitors from './components/Visitors';

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Reviews />
      <Rating />
      <Analysis />
      <Visitors />
   </div>
  );
}

export default App;
