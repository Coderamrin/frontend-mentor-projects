import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import ShortenBar from './components/ShortenBar';
import Statistic from './components/Statistic';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {



  return (
    <div className='App'>
      <Header />
      <Hero />
      <ShortenBar />
      <Statistic />
      <GetStarted />
      <Footer /> 
    </div>
  );
}

export default App;
