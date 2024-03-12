import Contact from "./components/contact/Contact";
import KindWords from "./components/kind-words/KindWords";
import LatestProjects from "./components/latest-projects/LatestProjects";

function App() {
  return (
    <div className="App">
      <LatestProjects />
      <KindWords />
      <Contact />
    </div>
  );
}

export default App;
