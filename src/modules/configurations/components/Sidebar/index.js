import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import DragableElement from '../../../../components/DragableElement';
import Rectangle from '../../../../components/Rectangle';

import Styled from './styled';

const Sidebar = ({ setDragableElementType, saveLayout, resetLayout }) => {
    const onDragStart = type => {
        setDragableElementType(type);
    };
    
    return (
        <Styled>
            <section>
                <DragableElement
                    onDragStart={() => onDragStart('aqua')}
                >
                    <Rectangle className="aqua" />
                </DragableElement>
                <DragableElement
                    onDragStart={() => onDragStart('simple')}
                >
                    <Rectangle className="simple" />
                </DragableElement>
                <DragableElement
                    onDragStart={() => onDragStart('darkyan')}
                >
                    <Rectangle className="darkyan" />
                </DragableElement>
            </section>
            <footer>
                <Button 
                        variant="contained" 
                        color="primary"
                        onClick={saveLayout}
                    >
                    Save
                </Button>
                <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={resetLayout}
                >
                    Reset
                </Button>          
            </footer>
            
        </Styled>
    );
};

Sidebar.propTypes = {
    setDragableElementType: PropTypes.func,
    saveLayout: PropTypes.func,
    resetLayout: PropTypes.func
};

export default Sidebar;