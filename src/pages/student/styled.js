import styled from 'styled-components';

export const StudentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 20px 0;
    max-width: 995px;
    margin: 40px auto;
`;
export const Title = styled.h1`
    padding: 20px 0;
    font-size: 20px;
`;
export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #fff;
    padding: 20px 0;
    max-width: 995px;
    margin: 40px auto;

    form {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 100%;
        gap: 20px;
        padding: 0 50px;
    }
`;

export const WrapperField = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    div {
        flex-wrap: wrap;
        flex: 1 1 276px;
        gap: 5px;
    }
`;
