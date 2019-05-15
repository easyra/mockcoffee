import React, { useState, useEffect } from 'react';
import ChatInput from './ChatInput';
import MessageBox from './MessageBox';
import AWS from '../../aws/AWSConfig.js';

const Chat = () => {
  console.log('object');

  const docClient = new AWS.DynamoDB.DocumentClient();
  const getChat = () => {
    const table = 'chatroom';
    const params = {
      TableName: 'chatroom',
      ExpressionAttributeNames: {
        '#t': 'text'
      },
      ProjectionExpression: 'username, #t'
    };
    docClient.scan(params, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        setMessages(data.Items);
      }
    });
  };

  useEffect(() => {
    getChat();
  });

  const [messages, setMessages] = useState([]);
  const addNewMessage = newMessage => {
    const messagesClone = messages.slice(0);
    messagesClone.push(newMessage);
    setMessages(messagesClone);
  };
  return (
    <div className='chat'>
      <MessageBox messages={messages} />
      <ChatInput addNewMessage={addNewMessage} />
    </div>
  );
};

export default Chat;
