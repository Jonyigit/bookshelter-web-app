import styled from "styled-components";

const Button = styled.button`
    width: 100%;
    background: var(--grey);
    color: var(--secondary-bg);
    border: none;
    outline: none;
    border-radius: 4px;
    font-family: inherit;
    padding: 10px 0px;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 100%;
`;

function ReadButton() {
    return <Button>Read</Button>;
}

export default ReadButton;
