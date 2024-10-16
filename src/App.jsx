import './App.css';
import About from './component/About';
import Blog from './component/Blog';
import Destination from './component/Destination';
import Footer from './component/Footer';
import Home from './component/Home';
import Nav from './component/Nav';
import Tour from './component/Tour';

function App() {
  return (
    <>
      <Nav />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="destination"><Destination /></div>
      <div id="tour"><Tour /></div>
      <div id="blog"><Blog /></div>
      <Footer />
    </>
  );
}

export default App;
