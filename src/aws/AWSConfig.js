import AWS from 'aws-sdk';
import dotenv from './dotenv';
const key = process.env.KWY_AWS || require('./accesskeys.js').key;
const id = process.env.ID_AWS || require('./accesskeys.js').id;
AWS.config.update({
  region: 'us-west-2',
  endpoint: 'https://dynamodb.us-west-2.amazonaws.com',
  accessKeyId: id,
  secretAccessKey: key
});

export default AWS;
