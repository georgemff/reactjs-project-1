import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import KindWords from "./components/kind-words/KindWords";
import LatestProjects from "./components/latest-projects/LatestProjects";

function App() {
  return (
    <div className="App">
      <LatestProjects />
      <KindWords />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
