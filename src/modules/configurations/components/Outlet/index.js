import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTitle } from '../../../../redux/appSlice';
import { addLayout, selectEditableLayout, resetEditableLayout } from '../../../../redux/layoutsSlice';

import SaveDialog from '../SaveDialog';
import Sidebar from '../Sidebar';
import Main from '../Main';
import Styled from './styled';

export default () => {
    const dispatch = useDispatch();
    const editableLayout = useSelector(selectEditableLayout);
    const [currentLayout, setCurrentLayout] = useState(editableLayout || []);
    const [elementTypes, setElementTypes] = useState(editableLayout ? editableLayout.map(e => e.type) : []);
    const [dragableElementType, setDragableElementType] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    //console.log('elementTypes: ', elementTypes)
    //console.log('currentLayout: ', currentLayout)
    
    useEffect(() => {
        dispatch(setTitle('Configurations'));
    });

    const onLayoutChange = layout => {
        if(currentLayout.length === layout.length)
            setCurrentLayout(layout);
    }

    const onDrop = layout => {
        setElementTypes([...elementTypes, dragableElementType]);
        setCurrentLayout(layout)
    };

    const saveLayout = () => {
        if(currentLayout.length > 0) {
            dispatch(addLayout(currentLayout.map((item, index) => ({
                ...item,
                type: elementTypes[index]
            }))));
            setCurrentLayout([]);
        }
    };

    const resetLayout = () => {
        setCurrentLayout([]);
        setElementTypes([]);
        setDragableElementType(null);
        dispatch(resetEditableLayout());
    };

    return (
        <Styled>
            <Sidebar 
                setDragableElementType={setDragableElementType} 
                saveLayout={() => setOpenDialog(true)}
                resetLayout={resetLayout}
            />

            <Main 
                layout={currentLayout} 
                elementTypes={elementTypes}
                onLayoutChange={onLayoutChange}
                onDrop={onDrop}
            />
            
            <SaveDialog 
                open={openDialog} 
                setOpen={setOpenDialog} 
                saveLayout={saveLayout} 
            />
        </Styled>
    );
};