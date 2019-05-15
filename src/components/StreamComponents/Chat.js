import React, { useState, useEffect } from 'react';
import ChatInput from './ChatInput';
import MessageBox from './MessageBox';
import AWS from '../../aws/AWSConfig.js';

const Chat = () => {
  const docClient = new AWS.DynamoDB.DocumentClient();
  const getChat = () => {
    const table = 'chatroom';
    const params = {
      TableName: 'chatroom',
      ExpressionAttributeNames: {
        '#t': 'text',
        '#time': 'timestamp'
      },
      ProjectionExpression: 'username, #t, #time'
    };
    docClient.scan(params, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const newMessages = data.Items.sort((a, b) => {
          return a.timestamp - b.timestamp;
        });
        setMessages(newMessages);
      }
    });
  };

  useEffect(() => {
    getChat();
  });

  const [messages, setMessages] = useState([]);
  const addNewMessage = (username, text) => {
    const params = {
      TableName: 'chatroom',
      Item: {
        text: text,
        username: 'MockRabbit',
        timestamp: Date.now()
      }
    };
    docClient.put(params, function(err, data) {
      if (err) {
        console.error(
          'Unable to add item. Error JSON:',
          JSON.stringify(err, null, 2)
        );
      } else {
        console.log('Added item:', JSON.stringify(data, null, 2));
      }
    });
  };
  return (
    <div className='chat'>
      <MessageBox messages={messages} />
      <ChatInput addNewMessage={addNewMessage} />
    </div>
  );
};

export default Chat;
