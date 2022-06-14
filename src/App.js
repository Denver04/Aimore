import '../src/CSS/App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , HashRouter , Route , Routes} from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import InfoPage from "./components/InfoPage";
import About from './components/About';
import Partners from './components/Partners';
import Abc from './components/recipeInfo';
import AddContainer from './containers/addContainer';
import NavbarConatiner from './containers/NavbarConatiner';

function App() {
  const url = "/"
  return (
    <div className="App">
      <NavbarConatiner />
      <HashRouter>
        <Routes>
          <Route exact path={url} element={<Home />} />
          <Route path="/product/" element={<InfoPage />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/product/:id" element={<AddContainer />} />
        </Routes>
        <Partners />
        <About />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
