import styled from 'styled-components';
import { ErrorMessage } from 'formik';

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const Label = styled.label`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    align-items: center;
    display: flex;
    cursor: pointer;
    position: relative;
    justify-content: center;
    transition: ease-in-out 0.5s;

    svg {
        position: absolute;
        width: 52px;
        height: 52px;
    }
    :hover {
        background-color: #efefdd;
    }
    :hover svg {
        filter: brightness(65%);
    }

    input[type='file'] {
        display: none;
    }
`;

export const Image = styled.img`
    width: 140px;
    height: inherit;
    object-fit: cover;
    border-radius: 50%;
`;

export const Error = styled(ErrorMessage)`
    align-self: flex-start;
    color: #c3073f;
    margin-right: 10px;
    font-weight: bold;
`;
