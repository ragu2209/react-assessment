import React from 'react';

// react-moment use for date formating
import Moment from 'react-moment';

const Post = ({ posts }) => {
  return (
    <section>
      {posts.map((post, index) => (
        <article className="post clearfix" key={index}>
          <img src={post.author.avatar} alt="" className="post-image" />
          <div className="post-preview">
            <h2>{post.title}</h2>
            <i className="far fa-user">{post.author.name}</i>
            &nbsp;
            <i className="far fa-calendar">
              <Moment date={post.publishDate} format="YYYY/MM/DD" />
            </i>
            <p className="preview-text">{post.summary}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Post;
