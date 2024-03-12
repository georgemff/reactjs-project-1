import styled from "styled-components";

const WordsCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    border: 2px solid #18171c;
    user-select: none;
`

const WordsCardHeader = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`

const CardAvatar = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    overflow: hidden;

    span {
        width: 35px;
        height: 35px;
        border-radius: 100%;
        font-size: 40px;
        background-color: #f7af24;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 50%);

        &::after {
            content: "“";
            width: 13px;
            height: 13px;
            line-height: 30px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }

    &>img {
        width: 100%;
    }
`

const WordsCardContent = styled.p`
    width: 100%;
    text-align: center;
    padding: 30px 0;
`

const WordsCardFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    &>span:first-child {
        font-weight: 600;
        color: #18171c;
    }
`

function WordsCard(props) {
    return (
        <WordsCardWrapper>
            <WordsCardHeader>
                <CardAvatar>
                    <img src={'/images/avatar-'+props.avatarId+'.jpg'} draggable={false} alt="avatar-2"/>
                    <span></span>
                </CardAvatar>
            </WordsCardHeader>
            <WordsCardContent>
                {props.content}
            </WordsCardContent>
            <WordsCardFooter>
                <span>{props.authorName}</span>
                <span>{props.authorPosition}</span>
            </WordsCardFooter>
        </WordsCardWrapper>
    );
}

export default WordsCard;