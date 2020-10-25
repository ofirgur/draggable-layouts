import React from 'react';
import PropTypes from 'prop-types';

import BasicLayout from '../../../../components/BasicLayout';
import Styled from './styled';

const Main = ({ layout, elementTypes, onLayoutChange, onDrop }) => {
    return (
        <Styled>
            <BasicLayout
                layout={layout}
                elementTypes={elementTypes}
                isDroppable={true}
                onLayoutChange={onLayoutChange}
                onDrop={onDrop} 
            />
        </Styled>
    );
};

Main.propTypes = {
    layout: PropTypes.arrayOf(PropTypes.object),
    elementTypes: PropTypes.arrayOf(PropTypes.string),
    onLayoutChange: PropTypes.func,
    onDrop: PropTypes.func
};

export default Main;