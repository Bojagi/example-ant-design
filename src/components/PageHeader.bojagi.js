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

const Wrapper = ({children}) => <div style={{flexGrow: 1}}>{children}</div>;

export const Simple = () =>
  <Wrapper>
    <PageHeader
      style={{
        border: '1px solid rgb(235, 237, 240)',
      }}
      onBack={() => null}
      title="Title"
      subTitle="This is a subtitle"
    />
  </Wrapper>

  export const WithBreadcrumb = () =>
    <Wrapper>
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        title="Title"
        breadcrumb={{ routes }}
        subTitle="This is a subtitle"
      />
    </Wrapper>
