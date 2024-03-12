import styled from "styled-components";


const ButtonElement = styled.button`
    padding: 12px 28px;
    border: 2px solid transparent;
    font-size: 16px;
    line-height: 1.5;
    text-decoration: none;
    font-weight: 600;
    transition: ease all 0.35s;
    display: inline-block;
    background: #f7af24;
    border-color: #18171c;
    color: #18171c;
    cursor: pointer;
`

function Button(props) {
    return (
        <ButtonElement>
            {props.text}
        </ButtonElement>
    )
}

export default Button;