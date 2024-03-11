import Card from "./card/Card";
import "./latestProjects.css";

function LatestProjects() {
    return (
      <section className="latest-projects">
            <h3 className="projects-title">
                Latest Projects 
                <img src="https://boston-react.vercel.app/assets/img/title.svg" alt="decor" />
            </h3>
            <div className="projects-cards">
                <Card title="hello" category="Web"/>
                <Card title="hello" category="Web"/>
                <Card title="hello" category="Web"/>
                <Card title="hello" category="Web"/>
                <Card title="hello" category="Web"/>
                <Card title="hello" category="Web"/>
            </div>
      </section>  
    );
}

export default LatestProjects;
