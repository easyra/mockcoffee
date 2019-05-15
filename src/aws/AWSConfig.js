import AWS from 'aws-sdk';
// import dotenv from './dotenv';

AWS.config.update({
  region: 'us-west-2',
  endpoint: 'https://dynamodb.us-west-2.amazonaws.com',
  accessKeyId: process.env.REACT_APP_AWS_ID,
  secretAccessKey: process.env.REACT_APP_AWS_KEY
});

export default AWS;
