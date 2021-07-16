import PropTypes from 'prop-types';
import * as Styled from './styled';

const Input = ({
    field,
    form,
    label,
    focusIn,
    touched,
    errors,
    handleBlur,
    ...props
}) => {
    const { name } = field;
    return (
        <Styled.InputContainer>
            <Styled.Label htmlFor={name}>
                {label}
                <Styled.Input
                    {...field}
                    {...props}
                    autoFocus={focusIn}
                    onBlur={handleBlur}
                />
            </Styled.Label>
            {touched[name] && errors[name] && (
                <Styled.Error name={field.name} component="div" />
            )}
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
    touched: PropTypes.object,
    errors: PropTypes.object,
    handleBlur: PropTypes.func,
};

export default Input;
