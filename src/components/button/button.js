import { memo } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';

const Button = ({ text, ...props }) => (
    <Styled.Button {...props}>{text}</Styled.Button>
);

Button.propTypes = {
    text: PropTypes.string.isRequired,
    props: PropTypes.string,
};
export default memo(Button);
