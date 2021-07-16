import styled from 'styled-components';

export const CardFlip = styled.div`
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    width: inherit;
    height: inherit;
    border-radius: 10px;
`;

export const CardContainer = styled.div`
    display: flex;
    width: 100%;
    perspective: 1000px;
    position: relative;
    border-radius: 10px;
    width: 300px;
    height: 210px;
    :hover ${CardFlip} {
        transform: rotateY(180deg);
    }
`;

export const CardFront = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #c3073f;
    width: inherit;
    height: inherit;
    position: absolute;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 10px;
    z-index: 0;
`;

export const CardBack = styled(CardFront)`
    flex-direction: row;
    background-color: #2980b9;
    transform: rotateY(170deg);
    z-index: 1;

    button:last-child {
        background: rgba(255, 254, 255);
        color: #c3073f;
        border-right: none;
    }

    button {
        flex: 1;
        border-right: 1px solid;
        transition: 1s;

        :hover {
            filter: brightness(75%);
        }
    }
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const WrapperText = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};

    justify-content: space-between;
    p {
        font-size: 14px;
        margin: 4px 0;
    }
    p:first-of-type {
        margin-top: 0;
    }
    span {
        font-size: 12px;
        margin-top: 4px;
    }
`;
