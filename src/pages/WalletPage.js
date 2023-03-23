import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import MagicWidget from "../components/MagicWidget";

const WalletPage = () => {
  return (
    <div className="wallet-container">
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <h1>Hello, welcome to my Website</h1>
            <h3>You are authenticated. This is the premium content page.</h3>
            <MagicWidget user={user} />
            <button onClick={signOut}>Sign Out</button>
          </div>
        )}
      </Authenticator>
    </div>
  );
};

export default WalletPage;
