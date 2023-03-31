import { CopyBlock, atomOneDark } from "react-code-blocks";
import CodeBlock from "../components/CodeBlock";
import {
  awsExports,
  importAmplify,
  amplifyInitialize,
  withAuthenticator,
} from "../utils/codeBlocks";

const Home = () => {
  return (
    <div className="home-container">
      <div className="logo-container">
        <img className="logo" src="/magic-logo.png" alt="Magic logo" />{" "}
        <p className="plus-sign">+</p>
        <img
          className="logo"
          src="aws-cognito-logo.png"
          alt="Amazon Cognito logo"
        />
      </div>
      <h1 className="home-title">
        Magic Wallet Services
        <br /> <span>with</span> <br /> Amazon Cognito
      </h1>
      <hr className="divider" />
      <section id="demo">
        <h2>Try It Out</h2>
        <p>
          You can try out this demo integration by clicking "Magic Wallet" in
          the top-left corner of this page and registering a new account.
        </p>
      </section>
      <section id="instructions">
        <h2>Instructions</h2>
        <p>To build your own app using AWS, follow these instructions:</p>
        <div className="step-list">
          <ol>
            <li>
              First, make sure you have an AWS account. If you don't, create one
              by visiting{" "}
              <a
                href="https://aws.amazon.com/"
                target="_blank"
                rel="noreferrer"
              >
                AWS
              </a>{" "}
              and following the instructions.
            </li>
            <li>
              Once you have an AWS account, go to the{" "}
              <a
                href="https://console.aws.amazon.com/"
                target="_blank"
                rel="noreferrer"
              >
                AWS Management Console
              </a>{" "}
              and sign in.
            </li>
            <li>
              In the console, navigate to the Cognito service by selecting
              "Services" from the menu at the top of the screen and searching
              for "Cognito". Select "Cognito" when it appears in the search
              results.
            </li>
            <li>In the Cognito dashboard, click on "Manage User Pools".</li>
            <li>Click on the "Create a user pool" button.</li>
            <li>
              Enter a name for your user pool and click "Review defaults". You
              can customize the settings later if needed.
            </li>
            <li>
              Review the settings and click "Create pool" to create your user
              pool.
            </li>
            <li>
              Once the user pool is created, click on "App clients" in the left
              sidebar, then click on "Add an app client".
            </li>
            <li>
              Enter a name for your app client and select "React" as the
              platform.
            </li>
            <li>
              Under "App client settings", check the box next to "Enable
              username password-based authentication (ALLOW_USER_PASSWORD_AUTH)"
              and "Generate client secret". Leave the other settings as default.
            </li>
            <li>
              In the root directory of your React app, install the AWS Amplify
              library by running the command{" "}
              <code>npm install aws-amplify</code>.
            </li>
            <li>
              Next, install the AWS Amplify React library by running the command{" "}
              <code>npm install aws-amplify-react</code>.
            </li>
            <li>
              In the root directory of your React app, create a new file called
              "aws-exports.js". Copy the following code into this file,
              replacing the values with your own:
              <CodeBlock text={awsExports} />
              Replace the placeholders with your actual values, which you can
              find in your Cognito console and AppSync console.
            </li>
            <li>
              In your app's "src/index.js" file, import the following:
              <CodeBlock text={importAmplify} />
            </li>
            <li>
              Initialize Amplify by adding the following code to the same file:
              <CodeBlock text={amplifyInitialize} />
            </li>
            <li>
              Wrap your app component with the "withAuthenticator" HOC to enable
              user authentication:
              <CodeBlock text={withAuthenticator} />
            </li>
            <li>
              Finally, start your app by running the command{" "}
              <code>npm start</code> in your terminal. Your app should now be
              configured to use AWS Cognito for authentication.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Home;
