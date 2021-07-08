import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as Colors from '../../config/colors';

export const LoginContainer = styled.div`
    background-color: ${Colors.primaryColor};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Item = styled.div`
    color: #fff;
    margin-right: 10px;
    font-weight: bold;
    cursor: pointer;
`;

export const LinkNav = styled(Link)`
    color: #fff;
    margin-right: 10px;
    font-weight: bold;
`;
