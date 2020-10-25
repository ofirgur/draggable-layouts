import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styled';

const Rectangle = ({ className }) => {
    return (
        <Styled 
            className={className}
        />
    );
};

Rectangle.propTypes = {
    className: PropTypes.string
};

export default Rectangle;