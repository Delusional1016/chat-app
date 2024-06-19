import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import SendMessage from './SendMessage';
import { db } from '../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';

const style = {
    main: `flex flex-col p-[10px] relative h-[57vh] overflow-y-auto pb-[10px]` // Add padding-bottom to make space for the form
};

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <>
            <main className={style.main}>
                {messages && messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
                <div ref={scroll}></div>
            </main>
            <SendMessage scroll={scroll} />
        </>
    );
};

export default Chat;
