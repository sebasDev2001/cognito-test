import { CognitoUserPool } from "amazon-cognito-identity-js";

const UserPool = {
    UserPoolId: 'us-east-1_AsTzdsJR2',
    ClientId: '3klbgdfvuiha4uv5fgcjsn6ga8'
}




export default new CognitoUserPool(UserPool);