export const awsExports = `const awsmobile = {
  "aws_project_region": "us-east-1",
  "aws_cognito_identity_pool_id": "YOUR_COGNITO_IDENTITY_POOL_ID",
  "aws_cognito_region": "us-east-1",
  "aws_user_pools_id": "YOUR_USER_POOL_ID",
  "aws_user_pools_web_client_id": "YOUR_APP_CLIENT_ID",
  "oauth": {},
  "aws_appsync_graphqlEndpoint": "YOUR_APPSYNC_GRAPHQL_ENDPOINT",
  "aws_appsync_region": "us-east-1",
  "aws_appsync_authenticationType": "API_KEY"
};

export default awsmobile;`;

export const importAmplify = `import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';`;

export const amplifyInitialize = `Amplify.configure(awsmobile);`;

export const withAuthenticator = `const AppWithAuth = withAuthenticator(App, { includeGreetings: true });
ReactDOM.render(<AppWithAuth />, document.getElementById('root'));`;
