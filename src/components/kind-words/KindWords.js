import { ContentWrapper } from "../../shared/styled-components/ContentWrapper";
import TitleHeader from "../../shared/title-header/TitleHeader";
import "./KindWords.css"
import WordsCard from "./words-card/WordsCard";
import { kindWordsData } from "./words-data/data";

function KindWords(props) {

    return (
        <section className="kind-words py-100">
            <ContentWrapper>
            <TitleHeader title="client's kind words" labelText="Testimonial" />
                <div className="words">
                    {
                        kindWordsData.map(d => (
                            <WordsCard 
                                content={d.content}
                                authorName={d.author.name} 
                                authorPosition={d.author.position} 
                                avatarId={d.avatarId} />
                        ))
                    }
                </div>
               
            </ContentWrapper>
        </section>
    )

}

export default KindWords;