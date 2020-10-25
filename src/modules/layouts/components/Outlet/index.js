import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTitle } from '../../../../redux/appSlice';
import { selectLayouts } from '../../../../redux/layoutsSlice';
import { useHistory } from 'react-router-dom';
import BorderColorIcon from '@material-ui/icons/BorderColor';

import { setEditableLayout } from '../../../../redux/layoutsSlice';

import BasicLayout from '../../../../components/BasicLayout';
import EmptyDialog from '../EmptyDialog';
import Styled from './styled';

export default () => {
    const dispatch = useDispatch();
    const layouts = useSelector(selectLayouts);
    const history = useHistory();

    useEffect(() => {
        dispatch(setTitle('Layouts'))
    });

    const handleEdit = index => {
        dispatch(setEditableLayout(index));
        history.push('/configurations');
    };

    return (
        <>
            <Styled>
            {
                layouts
                .map((layout, i) => {
                    return (
                        <div key={i}>
                            <BorderColorIcon onClick={() => handleEdit(i)} />
                            <BasicLayout 
                                layout={layout} 
                                viewOnly={true} 
                            >
                                <BorderColorIcon />
                            </BasicLayout>
                        </div>
                    );
                })
            }
            </Styled>
            <EmptyDialog open={layouts.length === 0} />
        </>
    );
};