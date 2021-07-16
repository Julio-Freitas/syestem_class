import PropTypes from 'prop-types';
import { FaImage } from 'react-icons/fa';
import * as Styled from './styled';

const InputFile = ({ prevewImage, ...props }) => (
    <Styled.Label htmlFor="file">
        {prevewImage ? (
            <Styled.Image src={prevewImage} alt="foto" />
        ) : (
            <FaImage />
        )}
        <input type="file" name="file" id="file" {...props} />
    </Styled.Label>
);

InputFile.propTypes = {
    field: PropTypes.object.isRequired,
    prevewImage: PropTypes.string,
};

export default InputFile;
