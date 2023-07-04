import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from './HomePage.module.css';

const HomePage = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const router = useRouter();

  // Get current posts based on pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePostClick = (postId, userId) => {
    router.push(`/blog/${postId}?user_id=${userId}`);
  };

  const handleUserPageClick = () => {
    router.push('/users');
  };

  return (
    <div style={{ backgroundColor:"#f5f5f5" }} >
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Blog Post List</h1>
        <button className={styles.userButton} onClick={handleUserPageClick}>
          User Page
        </button>
      </div>
      {currentPosts.map((post) => (
        <div key={post.id} className={styles.postItem} onClick={() => handlePostClick(post.id, post.user_id)}>
          <h3 className={styles.postTitle}>{post.title}</h3>
          <p className={styles.postBody}>{post.body}</p>
        </div>
      ))}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePaginationClick(i + 1)}
            className={currentPage === i + 1 ? styles.activePage : styles.page}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get('https://gorest.co.in/public/v2/posts');
    const posts = response.data || [];

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        posts: [],
      },
    };
  }
}

export default HomePage;
