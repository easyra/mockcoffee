import AWS from 'aws-sdk';
import { key, id } from './accesskeys.js';
import dotenv from './dotenv';

AWS.config.update({
  region: 'us-west-2',
  endpoint: 'https://dynamodb.us-west-2.amazonaws.com',
  accessKeyId: process.env.AWS_ID || id,
  secretAccessKey: process.env.AWS_KEY || key
});

export default AWS;
