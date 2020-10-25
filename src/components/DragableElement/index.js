import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styled';

const DragableElement = ({ children, key, onDragStart }) => {
    return (
        <Styled 
            key={key}
            className="droppable-element"
            draggable={true}
            unselectable="on"
            onDragStart={onDragStart}
        >
            {children}
        </Styled>
    );
};

DragableElement.propTypes = {
    children: PropTypes.node,
    key: PropTypes.string,
    onDragStart: PropTypes.func
};

export default DragableElement;