import styled from 'styled-components';

export const StudentListContainer = styled.div`
    display: flex;
    background-color: #fff;
    max-width: 800px;
    margin: 20px auto;
    padding: 10px 20px;
`;

export const CardContainer = styled.div`
    display: flex;
    width: 100%;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #c3073f;
    width: 300px;
    height: 210px;
    border-radius: 10px;
    position: relative;
`;

export const CardImage = styled.div`
    display: flex;
    background-color: #ccc;
    width: 100%;
    height: 60%;
    border-radius: 10px;
    background-image: url('https://media.istockphoto.com/vectors/person-gray-photo-placeholder-man-vector-id1133765772?k=6&m=1133765772&s=612x612&w=0&h=o7gI4xV8szPcFec0DLiX13Of9keeQNXUmFfPZqguiPk=');

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 2;
`;

export const CardInfo = styled.div`
    padding: 20px 10px;
    position: absolute;
    z-index: 1;
    bottom: 0;
    width: 100%;
    height: 45%;
`;
