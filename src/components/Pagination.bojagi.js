import React from 'react';
import Pagination from './Pagination';

export default {
  title: 'Pagination',
};

export const Basic = () => <Pagination defaultCurrent={1} total={50} />;

export const WithMorepages = () => <Pagination defaultCurrent={6} total={500} />;

export const WithSizeChanger = () => 
  <Pagination
    showSizeChanger
    onShowSizeChange={() => {}}
    defaultCurrent={3}
    total={500}
  />
