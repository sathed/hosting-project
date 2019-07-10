var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var bucketName = 'mtech-lambda-project-bucket';
var pi = "3.1415926535897932384626433";

// The keyName should be your name.
var keyName = '<your_name>';
var object = 'pi.txt';
