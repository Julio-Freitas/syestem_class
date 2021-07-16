import PropTypes from 'prop-types';
import { Button } from '../button';
import * as Styled from './style';

const CardFlip = ({
    name,
    email,
    heigth,
    weigth,
    years,
    onClickEdit,
    onClickDelete,
}) => {
    return (
        <Styled.CardContainer>
            <Styled.CardFlip>
                <Styled.CardFront>
                    <Styled.CardImage></Styled.CardImage>
                    <Styled.CardInfo>
                        <Styled.WrapperText direction="column">
                            <p> {name}</p>
                            <p>{email}</p>
                        </Styled.WrapperText>
                        <Styled.WrapperText>
                            <span> altura: {heigth} </span>
                            <span> idade: {years} </span>
                            <span> peso:{weigth}kg </span>
                        </Styled.WrapperText>
                    </Styled.CardInfo>
                </Styled.CardFront>
                <Styled.CardBack>
                    <Button onClick={onClickEdit} type="button" text="Editar" />
                    <Button
                        onClick={onClickDelete}
                        type="button"
                        text="Excluir"
                    />
                </Styled.CardBack>
            </Styled.CardFlip>
        </Styled.CardContainer>
    );
};

CardFlip.defaultProps = {
    name: '',
    email: '',
    heigth: 0,
    weigth: 0,
    years: 0,
    onClickEdit: () => false,
    onClickDelete: () => false,
};

CardFlip.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    heigth: PropTypes.number.isRequired,
    weigth: PropTypes.number.isRequired,
    years: PropTypes.number.isRequired,
    onClickEdit: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired,
};
export default CardFlip;
