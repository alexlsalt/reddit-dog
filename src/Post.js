import React from 'react';
import './Post.css';
import ImageUnavailable from './unavailable.png';

export default function Post({ post }) {

  return (
    <div className='post'>
      <Votes votes={post.ups} />
      <ImageBox post={post} />
      <Content post={post} />
    </div>
  )
}

const Votes = ({ votes }) => {
  return (
    <div className='votes'>
      <span>{votes}</span>
    </div>
  )
}

const ImageBox = ({ post }) => {
  let image;

  if (!post.preview) {
    image = ImageUnavailable;
  } else if (post.preview.enabled === false) {
    image = ImageUnavailable;
  } else {
    image = post.url;
  }

  return (
    <div className='image'>
      <img src={image} alt='dog' />
    </div>
  )
}


function Content({ post }) {

  return (
    <div className='content'>
      <a href={`https://www.reddit.com${post.permalink}`} target='_blank' rel='noreferrer' className='title'>{post.title}</a>
      <span>Submitted by {post.author}</span>
      <Buttons comments={post.num_comments} />
    </div>
  )
}

const Buttons = ({ comments }) => (
  <div className='buttons'>
    <span className='comments'>
      {
        comments === 1 ? `${comments} comment` : `${comments} comments`
      }
      </span>
    <span>share</span>
    <span>save</span>
    <span>hide</span>
    <span>report</span>
    <span>pocket</span>
  </div>
)