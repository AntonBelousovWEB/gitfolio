import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import db from '../../firebase';

function UserPage() {
  const { userId } = useParams(); // Получить ID пользователя из URL
  const [user, setUser] = useState(null); // Состояние для данных пользователя

  useEffect(() => {
    async function fetchUser() {
      try {
        const userRef = doc(collection(db, 'Users'), userId);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setUser(userDoc.data());
        } else {
          console.log('User not found');
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, [userId]);

  // Ваш код для отображения данных пользователя

  return (
    <div>
      <h1>User Page</h1>
      {user ? (
        <div>
          <p>User ID: {user.userId}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserPage;
