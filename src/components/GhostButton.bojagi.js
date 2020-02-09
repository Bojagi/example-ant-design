import React from 'react';
import Button from './GhostButton';

export default {
  title: 'GhostButton',
};

export const buttonPrimary = () => 
  <Button type="primary">
    Primary
  </Button>

export const buttonDanger = () =>
  <Button type="danger">
    Danger, danger. High Voltage!
  </Button>
