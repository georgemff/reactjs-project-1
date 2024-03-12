import styled from "styled-components";

const TitleWrapper = styled.div`
    width: 100%;
   
    margin-bottom: 45px;
`

const TitleH3 = styled.h3`
    font-size: 55px;
    font-weight: bold;
    color: #18171c;
    text-transform: capitalize;

`

const TitleSpan = styled.span`
    position: relative;
    &::after {
            content: url("https://boston-react.vercel.app/assets/img/title.svg");
            position: absolute;
            bottom: -30px;
            right: 0;
        }
`

const TitleLabel = styled.div`
        display: inline-block;
        border: 1px solid #5c64cf;
        padding: 8px 20px;
        color: #5c64cf;
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
        margin-bottom: 1rem;
`


function TitleHeader(props) {
    return (
        <TitleWrapper>
            <TitleLabel>{props.labelText}</TitleLabel>
            <TitleH3>
                <TitleSpan>{props.title}</TitleSpan>
            </TitleH3>
        </TitleWrapper>
    )
}

export default TitleHeader;