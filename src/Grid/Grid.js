import React from 'react';
import styles from './styles.css';

const Grid = props => (
  <>
    <style>{styles}</style>
    <div className="lds-grid">
      <div style={{ backgroundColor: props.color }} />
      <div style={{ backgroundColor: props.color }} />
      <div style={{ backgroundColor: props.color }} />
      <div style={{ backgroundColor: props.color }} />
      <div style={{ backgroundColor: props.color }} />
      <div style={{ backgroundColor: props.color }} />
      <div style={{ backgroundColor: props.color }} />
      <div style={{ backgroundColor: props.color }} />
      <div style={{ backgroundColor: props.color }} />
    </div>
  </>
);

export default Grid;
