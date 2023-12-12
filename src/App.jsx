import Header from './components/Header/Header.jsx';
import Slider from './components/Slider/Slider.jsx';
import Recomendation from './components/Recomendation/Recomendation.jsx';
import ToCorporations from './components/ToCorporations/ToCorporations.jsx';
import Footer from './components/Footer/Footer.jsx';

import './App.scss'


function App() {

  return (
   <div className="App">
      <Header />
      <Slider />
      <Recomendation />
      <ToCorporations />
      <Footer />
   </div>
  );
};

export default App;
