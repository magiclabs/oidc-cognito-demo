import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import MagicWidget from "../components/MagicWidget";

const WalletPage = () => {
  return (
    <div className="wallet-container">
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <h1 className="wallet-title">Magic Wallet</h1>
            <MagicWidget user={user} />
            <button onClick={signOut}>Sign Out</button>
          </div>
        )}
      </Authenticator>
    </div>
  );
};

export default WalletPage;
