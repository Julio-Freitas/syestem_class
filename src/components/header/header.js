import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-icons/fa';
import * as Styled from './styled';

const Header = ({ logout }) => {
    const isLogged = true;
    return (
        <Styled.LoginContainer>
            <Styled.LinkNav to="/" data-testid="linkHome">
                <Icon.FaHome title="Inicio" />
            </Styled.LinkNav>
            <Styled.LinkNav to="/alunos" data-testid="linkAlunos">
                <Icon.FaUserFriends title="alunos" />
            </Styled.LinkNav>
            <Styled.Item>
                <Icon.FaSignOutAlt
                    title="Sair"
                    onClick={logout}
                    data-testid="linkLogout"
                />
            </Styled.Item>
            <Styled.Item>
                <Icon.FaCircle
                    color={isLogged ? '#7CFC00' : '#ddd'}
                    title={isLogged ? 'Logado' : 'Deslogado'}
                />
            </Styled.Item>
        </Styled.LoginContainer>
    );
};

Header.defaultProps = {
    logout: () => {},
};

Header.propTypes = {
    logout: PropTypes.func.isRequired,
};

export default Header;
