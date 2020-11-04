const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const {
  USER_POOL_ID,
  CLIENT_ID
} = require('./../../../config/config');

const poolData = {
  UserPoolId: USER_POOL_ID,
  ClientId: CLIENT_ID
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const login = async (body, callback) => {
  let userName = body.name;
  let password = body.password;
  let authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
       Username: userName,
       Password: password
   });
   let userData = {
       Username: userName,
       Pool: userPool
   }
   let cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
   cognitoUser.authenticateUser(authenticationDetails, {
       onSuccess: (result) => {
          let accesstoken = result.getAccessToken().getJwtToken();
          callback(null, accesstoken);
       },
       onFailure: ((err) => {
          callback(err);
      })
  })
};



module.exports = login;