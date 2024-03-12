import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


const ContactInfoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    column-gap: 1rem;
`

const ContactInfoIcon = styled.div`
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background-color: #5c64cf;
    border-radius: 100%;
`

const ContactInfoContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    column-gap: 8px;

    h5 {
        font-size: 17px;
        margin: 0 0 5px;
    }

    span {
        font-size: 22px;
        color: #18171c;
        font-weight: 600;
    }
`

function ContactInfoCard(props) {
    return (
        <ContactInfoContainer>
            <ContactInfoIcon>
                <FontAwesomeIcon size="lg" icon={props.icon} color="#FFF"/>
            </ContactInfoIcon>
            <ContactInfoContent>
                <h5>{props.label}</h5>
                <span>{props.value}</span>
            </ContactInfoContent>
        </ContactInfoContainer>
    )
}

export default ContactInfoCard;