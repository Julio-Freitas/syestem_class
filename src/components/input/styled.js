import styled from 'styled-components';
import { ErrorMessage } from 'formik';

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const Label = styled.label`
    width: 100%;
`;

export const Input = styled.input`
    border: 1px solid #ccc;
    align-self: flex-end;
    flex: 1;
    height: 28px;
    border-radius: 6px;
    text-indent: 6px;
    width: 100%;
    margin-bottom: 10px;
`;

export const Error = styled(ErrorMessage)`
    align-self: flex-start;
    color: #c3073f;
    margin-right: 10px;
    font-weight: bold;
`;
