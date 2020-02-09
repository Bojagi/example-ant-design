import React from 'react';
import Button from './GhostButton';

export default {
  title: 'GhostButton',
};

export const buttonDefault = () => 
  <Button>
    Default
  </Button>

export const buttonPrimary = () => 
  <Button type="primary">
    Primary
  </Button>

export const buttonDashed = () =>
  <Button type="dashed">
    Dashed Button
  </Button>

export const buttonDanger = () =>
  <Button type="danger">
    Danger, danger. High Voltage!
  </Button>

export const linkButton = () =>
  <Button type="link">
    Link me!
  </Button> 
