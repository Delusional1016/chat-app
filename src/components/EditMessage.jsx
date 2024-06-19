import React, { useState } from 'react';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';

const style = {
  button: `ml-2 bg-blue-500 text-white px-2 py-1 rounded`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  form: `flex items-center`
};

const EditMessage = ({ message }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newMessage, setNewMessage] = useState(message.text);

  const handleEdit = async () => {
    const messageRef = doc(db, 'messages', message.id);
    await updateDoc(messageRef, {
      text: newMessage
    });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleEdit} className={style.form}>
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className={style.input}
            type="text"
          />
          <button onClick={handleEdit} className={style.button}>Save</button>
        </form>
      ) : (
        <button onClick={() => setIsEditing(true)} className={style.button}>Edit</button>
      )}
    </div>
  );
};

export default EditMessage;
