import React from 'react';
import Steps from './Steps';
import { Icon } from 'antd';
const { Step } = Steps;

export default {
  title: 'Steps',
};

export const Basic = () =>
  <Steps current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>

export const MiniVersion = () =>
  <Steps size="small" current={1}>
    <Step title="Finished" />
    <Step title="In Progress" />
    <Step title="Waiting" />
  </Steps>

export const WithIcons = () => 
  <Steps>
    <Step status="finish" title="Login" icon={<Icon type="user" />} />
    <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
    <Step status="process" title="Pay" icon={<Icon type="loading" />} />
    <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
  </Steps>

export const Vertical = () =>
  <Steps direction="vertical" current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
