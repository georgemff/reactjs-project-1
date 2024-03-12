import { ContentWrapper } from "../../shared/styled-components/ContentWrapper";
import TitleHeader from "../../shared/title-header/TitleHeader";
import Card from "./card/Card";
import "./LatestProjects.css";

function LatestProjects() {
    return (
      <section className="latest-projects bg-yellow py-100">
            <ContentWrapper>
                <TitleHeader title="latest projects" labelText="Portfolio" />
                <div className="projects-cards">
                    {
                        [1,2,3,4,5,6].map(el => (
                            <div className="card" key={el}>
                                <Card title="Agency Landing page" category="Web/WordPress"/>
                            </div>
                        ))
                    }
                </div>
            </ContentWrapper>
      </section>  
    );
}

export default LatestProjects;
