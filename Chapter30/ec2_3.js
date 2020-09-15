var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');

ec2 = new AWS.EC2();

var params = {
  InstanceIds: [ 'i-0e7abc17' ], // 필수
  DryRun: false,
  Force: false
};

ec2.stopInstances(params, function (err, data) {
  if (err)
    console.log(err, err.stack);
  else
    console.log(data);
});
