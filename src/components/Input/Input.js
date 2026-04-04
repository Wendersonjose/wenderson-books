import styled from "styled-components";

const Input = styled.input`
    background: rgba(255, 255, 255, 0.12);
    border: 2px solid rgba(255, 255, 255, 0.3);
    padding: 16px 24px;
    border-radius: 50px;
    width: clamp(280px, 60vw, 500px);
    color: #fff;
    font-size: 16px;
    margin-top: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    text-align: center;

    &::placeholder {
        color: rgba(255, 255, 255, 0.8);
        font-size: 16px;
        text-align: center;
        transition: opacity 0.3s ease;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.18);
        border-color: rgba(255, 255, 255, 0.5);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }

    &:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.2);
        border: 2px solid #FF7F50;
        box-shadow: 0 6px 20px rgba(255, 127, 80, 0.3);
    }

    &:focus::placeholder {
        opacity: 0;
    }
`;

export default Input;