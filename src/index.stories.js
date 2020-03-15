import React from 'react';
import { Default, Grid, Ring } from '.';

export default {
  title: 'Spinners',
  parameters: {
    options: { selectedPanel: 'storybook/a11y/panel' }
  }
};

export const gridSpinner = () => <Grid />;
export const defaultSpinner = () => <Default />;
export const ringSpinner = () => <Ring />;
