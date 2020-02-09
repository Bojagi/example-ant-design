import React from 'react';
import Badge from './Badge';
import { Icon } from 'antd';
import styled from 'styled-components';

export default {
  title: 'Badge',
};

const HeadExample = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
  vertical-align: middle;
`;

export const Basic = () =>
  <Badge count={5}>
    <HeadExample />
  </Badge>

export const Zero = () =>
  <Badge count={0} showZero>
    <HeadExample />
  </Badge>

export const WithIcon = () =>
  <Badge count={<Icon type="clock-circle" style={{ color: '#f5222d' }} />}>
    <HeadExample />
  </Badge>

export const WithOverflowCount = () =>
  <Badge count={99} overflowCount={10}>
    <HeadExample />
  </Badge>
