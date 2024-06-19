import React from 'react';
import { db } from '../firebase';
import { doc, deleteDoc } from 'firebase/firestore';

const style = {
  button: `ml-2 bg-red-500 text-white px-2 py-1 rounded`
};

const DeleteMessage = ({ messageId }) => {
  const handleDelete = async () => {
    const messageRef = doc(db, 'messages', messageId);
    await deleteDoc(messageRef);
  };

  return (
    <button onClick={handleDelete} className={style.button}>Unsent</button>
  );
};

export default DeleteMessage;
