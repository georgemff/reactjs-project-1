import styled from "styled-components";


const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 8px;
    }
`

const InputElement = styled.input`
    border: 1px solid #18171c;
    padding: 0.575rem 0.75rem;
    height: 44px;

    &:focus {
        outline: none;
    }
`
const TextAreaElement = styled.textarea`
    border: 1px solid #18171c;
    padding: 0.575rem 0.75rem;

    &:focus {
        outline: none;
    }
`

function Input(props) {
    return (
        <InputWrapper>
            <label>{props.label}</label>
            {
                props.type === 'textarea' ?
                     <TextAreaElement 
                        rows={4}
                        placeholder={props.required ? props.placeholder + '*' : props.placeholder} 
                        id={props.id} /> :
                     <InputElement placeholder={props.required ? props.placeholder + '*' : props.placeholder} id={props.id} />
            }
        </InputWrapper>
    )
}

export default Input;