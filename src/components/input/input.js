import PropTypes from 'prop-types';
import * as Styled from './styled';

const Input = ({ field, form, label, focusIn, ...props }) => {
    return (
        <Styled.InputContainer>
            <Styled.Label htmlFor={field.name}>
                {label}
                <Styled.Input {...field} {...props} autoFocus={focusIn} />
            </Styled.Label>
            <Styled.Error name={field.name} component="div" />
        </Styled.InputContainer>
    );
};

Input.defaultProps = {
    field: {},
    props: {},
    form: {},
    label: 'Label Input',
};

Input.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    props: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    focusIn: PropTypes.bool,
};

export default Input;
