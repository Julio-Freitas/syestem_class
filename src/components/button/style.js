import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Button = styled.button`
    cursor: pointer;
    background-color: ${primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
`;
