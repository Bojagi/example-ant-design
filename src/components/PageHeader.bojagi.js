import React from 'react';
import PageHeader from './PageHeader';

export default {
  title: 'PageHeader',
};

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

export const Simple = () =>
  <PageHeader
    style={{
      border: '1px solid rgb(235, 237, 240)',
    }}
    onBack={() => null}
    title="Title"
    subTitle="This is a subtitle"
  />

  export const WithBreadcrumb = () =>
    <PageHeader
      style={{
        border: '1px solid rgb(235, 237, 240)',
      }}
      title="Title"
      breadcrumb={{ routes }}
      subTitle="This is a subtitle"
    />

