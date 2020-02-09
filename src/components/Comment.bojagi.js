import React from 'react';
import Comment from './Comment';
import { Icon, Avatar, Tooltip } from 'antd';

export default {
  title: 'Comment',
};

const actions = [
  <span key="comment-basic-like">
    <Tooltip title="Like">
      <Icon
        type="like"
        theme="outlined"
      />
    </Tooltip>
    <span style={{ paddingLeft: 8, cursor: 'auto' }}>{0}</span>
  </span>,
  <span key=' key="comment-basic-dislike"'>
    <Tooltip title="Dislike">
      <Icon
        type="dislike"
        theme="outlined"
      />
    </Tooltip>
    <span style={{ paddingLeft: 8, cursor: 'auto' }}>{0}</span>
  </span>,
  <span key="comment-basic-reply-to">Reply to</span>,
];

const ExampleComment = ({children}) =>
  <Comment
    actions={actions}
    author={<a>Han Solo</a>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully
        and efficiently.
      </p>
    }
    datetime={
        <span>a few seconds ago</span>
    }
  >
    {children}
  </Comment>

export const Basic = () =>
  <ExampleComment/>

export const Nested = () =>
  <ExampleComment>
    <ExampleComment>
      <ExampleComment/>
      <ExampleComment/>
    </ExampleComment>
  </ExampleComment>
