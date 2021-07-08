import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    width: 400px;
    height: 250px;
    flex-direction: column;
    justify-content: space-around;
    margin: 50px auto;
    max-width: 100%;
    padding: 20px 10px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 6px 7px 9px 1px #fff;
    form {
        display: flex;
        height: inherit;
        flex-direction: column;
        justify-content: space-around;
    }
`;

export const FieldWrapper = styled.div`
    max-width: 100%;
    width: 100%;
`;
