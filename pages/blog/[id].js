import React from 'react';
import axios from 'axios';
import styles from './BlogDetailPage.module.css';

const BlogDetailPage = ({ post, comments }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Blog Post Detail</h1>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.body}>{post.body}</p>
      <div className={styles.commentsSection}>
        <h3 className={styles.commentsHeading}>Comments:</h3>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className={styles.commentItem}>
              <p className={styles.commentBody}>{comment.body}</p>
              <div className={styles.userSection}>
                <h3 className={styles.userHeading}>User:</h3>
                <p className={styles.userName}>{comment.name}</p>
                <p className={styles.userEmail}>{comment.email}</p>
              </div>
            </div>
          ))
        ) : (
          <h4>No comments</h4>
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const postId = context.query.id;

  try {
    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`https://gorest.co.in/public-api/posts/${postId}`),
      axios.get(`https://gorest.co.in/public-api/comments?post_id=${postId}`),
    ]);

    const post = postResponse.data.data;
    const comments = commentsResponse.data.data || [];

    return {
      props: {
        post,
        comments,
      },
    };
  } catch (error) {
    // Handle error, e.g., show a custom error page
    console.error(error);
    return {
      notFound: true,
    };
  }
}

export default BlogDetailPage;
