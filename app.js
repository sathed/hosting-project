var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var bucketName = '';
var keyName = '';
var object = '';

// Don't use 'async'
exports.handler = (event, context) => {
    // Determine the winning choice
    // Rock loses to paper
    // etc.

    // Create the object in S3
    // bucket/yourname/results.txt

    // Return the string
};
