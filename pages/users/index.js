import React, { useState } from 'react';
import axios from 'axios';
import styles from './UsersPage.module.css';

const PAGE_SIZE = 10; // Number of users per page

const UsersPage = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(users);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [editUserName, setEditUserName] = useState('');
  const [editUserEmail, setEditUserEmail] = useState('');
  const [showCreateInput, setShowCreateInput] = useState(false);

  const handleSearch = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  
    if (term.trim() !== '') {
      try {
        const response = await axios.get(
          `https://gorest.co.in/public-api/users?name=${term}`,
          {
            headers: {
              Authorization:
                'Bearer b226cf391788ed049816d85f02de2db800232be174db30463e3d9ff1e43bb853',
            },
          }
        );
        const results = response.data.data;
  
        // Initialize the isEditing property for each user
        const usersWithEditing = results.map((user) => ({
          ...user,
          isEditing: false,
        }));
  
        setSearchResults(usersWithEditing);
        setCurrentPage(1);
      } catch (error) {
        console.error(error);
      }
    } else {
      setSearchResults(users);
    }
  };
  
  const handlePageChange = async (page) => {
    setCurrentPage(page);
    try {
      const response = await axios.get(
        `https://gorest.co.in/public-api/users?page=${page}&limit=${PAGE_SIZE}`,
        {
          headers: {
            Authorization:
              'Bearer b226cf391788ed049816d85f02de2db800232be174db30463e3d9ff1e43bb853',
          },
        }
      );
      const results = response.data.data;
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleCreateInput = () => {
    setShowCreateInput(!showCreateInput);
    setNewUserName('');
    setNewUserEmail('');
  };

  const createUser = async () => {
    try {
      const response = await axios.post(
        'https://gorest.co.in/public/v2/users',
        {
          name: newUserName,
          email: newUserEmail,
          status: 'active',
          gender: 'male',
        },
        {
          headers: {
            Authorization: 'Bearer b226cf391788ed049816d85f02de2db800232be174db30463e3d9ff1e43bb853',
          },
        }
      );
      const newUser = response.data;

      setSearchResults([newUser, ...searchResults]); // Update searchResults with the newly created user
      setNewUserName('');
      setNewUserEmail('');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(
        `https://gorest.co.in/public/v2/users/${userId}`,
        {
          headers: {
            Authorization:
              'Bearer b226cf391788ed049816d85f02de2db800232be174db30463e3d9ff1e43bb853', // Replace YOUR_API_KEY with the actual API key
          },
        }
      );

      setSearchResults(searchResults.filter((user) => user.id !== userId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditUser = (userId, userName, userEmail) => {
    setSearchResults((prevResults) =>
      prevResults.map((user) =>
        user.id === userId ? { ...user, isEditing: !user.isEditing } : user
      )
    );
    setEditUserName(userName);
    setEditUserEmail(userEmail);
  };
  
  

  const updateUser = async (userId, editName, editEmail) => {
    try {
      const response = await axios.patch(
        `https://gorest.co.in/public/v2/users/${userId}`,
        {
          name: editUserName,
          email: editUserEmail,
          status: 'active',
        },
        {
          headers: {
            Authorization:
              'Bearer b226cf391788ed049816d85f02de2db800232be174db30463e3d9ff1e43bb853', // Replace YOUR_API_KEY with the actual API key
          },
        }
      );

      const updatedUser = response.data;
      setSearchResults((prevResults) =>
        prevResults.map((user) =>
          user.id === userId ? { ...updatedUser, isEditing: false } : user
        )
      );
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div style={{ backgroundColor:"#f5f5f5" }} >
    <div className={styles.container}>
      <h1 className={styles.heading}>Users Page</h1>
      <div className={styles.newUserForm}>
        {!showCreateInput ? (
          <button onClick={toggleCreateInput} className={styles.editButton} style={{ marginBottom: '20px' }}>
          Create User
        </button>        
        ) : (
          <>
            <input
              type="text"
              placeholder="Name"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              className={styles.inputField}
            />
            <input
              type="email"
              placeholder="Email"
              value={newUserEmail}
              onChange={(e) => setNewUserEmail(e.target.value)}
              className={styles.inputField}
            />
            <button onClick={createUser} className={styles.editButton}>
              Create
            </button>
            <button onClick={toggleCreateInput} className={styles.editButton}>
              Cancel
            </button>
          </>
        )}
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search users by name"
        className={styles.searchInput}
      />
      <ul className={styles.userList}>
        {searchResults.map((user) => (
          <li key={user.id} className={styles.userItem}>
            {user && user.isEditing ? (
              <div className={styles.editUserForm}>
                <input
          type="text"
          value={editUserName}
          onChange={(e) => setEditUserName(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="email"
          value={editUserEmail}
          onChange={(e) => setEditUserEmail(e.target.value)}
          className={styles.inputField}
        />
                <div className={styles.editUserButtons}>
                  <button
                    className={styles.saveButton}
                    onClick={() =>
                      updateUser(user.id, editUserName, editUserEmail)
                    }
                  >
                    Save
                  </button>
                  <button
                    className={styles.cancelButton}
                    onClick={() =>
                      handleEditUser(user.id, user.name, user.email)
                    }
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className={styles.userName}>{user.name ?? 'Unknown'}</p>
                <p className={styles.userEmail}>{user.email}</p>
                <div className={styles.userActions}>
                  <button
                    className={styles.editButton}
                    onClick={() =>
                      handleEditUser(user.id, user.name, user.email)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className={styles.deleteButton}
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          Previous Page
        </button>
        <span className={styles.pageNumber}>Page {currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={styles.paginationButton}
        >
          Next Page
        </button>
      </div>
    </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get('https://gorest.co.in/public/v2/users', {
      headers: {
        Authorization:
          'Bearer b226cf391788ed049816d85f02de2db800232be174db30463e3d9ff1e43bb853',
      },
    });
    const users = response.data;

    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        users: [], // Return an empty array if the request fails
      },
    };
  }
}

export default UsersPage;
