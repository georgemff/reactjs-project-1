import React from "react";

import styled from "styled-components";

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    border: 2px solid #18171c;
    transition: box-shadow 0.2s linear;

    &:hover {
        cursor: pointer;
        box-shadow: 3px 3px 0px 0px rgba(0,0,0,0.75);
    }
`

const CardImage = styled.div`
`
const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-top: 2px solid #18171c;
`
const CardDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const CardTitle = styled.p`
    font-size: 20px;
    color: #18171c;
    margin: 0 0 8px;
`

const CardCategory = styled.span`
    font-weight: 400;
    color: #555555;
`

const Arrow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #5c64cf;
    color: #FFF;
`
function Card(props) {
    return (
        <CardWrapper>
            <CardImage>
                <img 
                    src="https://boston-react.vercel.app/assets/img/project-1.jpg" 
                    style={{width: '100%'}}
                    alt="cover"/>
            </CardImage>
            <CardFooter>
                <CardDescriptionWrapper>
                    <CardTitle>{props.title}</CardTitle>
                    <CardCategory>{props.category}</CardCategory>
                </CardDescriptionWrapper>
                <Arrow>1</Arrow>
            </CardFooter>
        </CardWrapper>
    )
}

export default Card;