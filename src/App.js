import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portifolio/Portfolio";
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
                    <Portfolio />
                    <Contact/>
                    <Footer/>
                </>
            </header>
        </div>
    );
}

export default App;
