import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Main from './Main';
import Menu from './Menu';
import Nav from './Nav';

function App() {
  return (
    <>
    <Nav/>
    <BrowserRouter>
    <Main/>
    </BrowserRouter>
    <Menu/>
    <Footer/>
    </>
  );
}

export default App;
