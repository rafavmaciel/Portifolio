import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portifolio from "./components/portifolio/Portifolio";
import About from "./components/about/About";
import Experience from "./components/experience/Experience"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <>
                    <Header/>
                    <Nav/>
                    <About/>
                    <Experience/>
                    <Portifolio />
                    <Contact/>
                    <Footer/>
                </>
            </header>
        </div>
    );
}

export default App;
