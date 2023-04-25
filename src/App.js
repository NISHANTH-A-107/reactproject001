import './App.css';
import Appbar from './components/AppBar';
import Footerm from './components/Footer';
import Home from './components/Home';
import video from './components/assets/bgv2.mp4';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <div className='app2'>
        <video  className="vdo" autoPlay loop muted id='bgvideo'>
          <source src={video} type='video/mp4'/>
        </video>
        <Home className="hme"/>
      </div>
      <Footerm/>
    </div>
  );
}

export default App;
