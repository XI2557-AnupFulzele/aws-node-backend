
const AWS = require('aws-sdk');
var instance = null;
const aws_remote_config = {
    accessKeyId: process.env["access-key"],
    secretAccessKey: process.env["access-secret"],
    // accessKeyId: "AKIA2VTRLMDMRZZC2TUK",
    // secretAccessKey: "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",
    region: 'ap-south-1',
  }
module.exports = {
    aws_table_name: 'aws-tbl',
    aws_remote_config: aws_remote_config,
    getInstance : function() {
        if(instance){
          return instance;
        }
        AWS.config.update(aws_remote_config);
        const client = new AWS.DynamoDB.DocumentClient();
        return client;
    }
};
