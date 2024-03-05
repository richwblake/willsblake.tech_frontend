import './App.css';
import NavBar from './navbar';
import Intro from './intro';
import AboutMe from './aboutme';
import WorkList from './worklist';
import ProjectList from './projectlist';
import ContactForm from './contactform';
import Footer from './footer';

function App() {
    return (
        <>
            <NavBar />
            <Intro />
            <AboutMe />
            <WorkList />
            <ProjectList />
            <ContactForm />
            <Footer />
        </>
    )
}

export default App
