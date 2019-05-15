import AWS from 'aws-sdk';
import dotenv from './dotenv';
AWS.config.update({
  region: 'us-west-2',
  endpoint: 'https://dynamodb.us-west-2.amazonaws.com',
  accessKeyId: process.env.ID_AWS,
  secretAccessKey: process.env.KEY_AWS
});

export default AWS;
