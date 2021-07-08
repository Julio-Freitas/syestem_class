import * as Styled from './styled';
import * as GlobalStyle from '../../styles/global';

const NotFound = () => {
    return (
        <Styled.LoginContainer>
            <GlobalStyle.ContainerGlobal>
                <h1>Pagina não encontada...</h1>
            </GlobalStyle.ContainerGlobal>
        </Styled.LoginContainer>
    );
};

export default NotFound;
