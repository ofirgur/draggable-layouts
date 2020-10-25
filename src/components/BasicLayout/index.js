import React from "react";
import PropTypes from 'prop-types';

import RGL, { WidthProvider } from "react-grid-layout";

import ColoredRectangle from '../Rectangle';

import './style.css';

const ReactGridLayout = WidthProvider(RGL);

const BasicLayout = ({ 
  layout, elementTypes, isDroppable, 
  viewOnly, onLayoutChange, onDrop }) => {
    
  const generateDOM = () => {
    return layout.map((d, i) => (
        <div key={i}>
          <ColoredRectangle 
            className={elementTypes ? elementTypes[i] : d.type} 
          />
        </div>
    ));
  };

  const getLayout = () => {
    return viewOnly 
    ? layout.map(l => ({
        ...l, 
        static: true 
      }))
    : layout
  };

  return (
    <ReactGridLayout
        className="layout"
        layout={getLayout()}
        isDroppable={isDroppable}
        rowHeight={viewOnly ? 30 : 100}
        cols={6}
        rows={6}
        onLayoutChange={onLayoutChange}
        onDrop={onDrop}
      >
        {generateDOM()}
    </ReactGridLayout>
  );
}

BasicLayout.propTypes = {
  layout: PropTypes.arrayOf(PropTypes.object),
  elementTypes: PropTypes.arrayOf(PropTypes.string),
  isDroppable: PropTypes.bool,
  viewOnly: PropTypes.bool,
  onLayoutChange: PropTypes.func,
  onDrop: PropTypes.func
};

export default BasicLayout;
