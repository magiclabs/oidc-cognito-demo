import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import MagicWidget from "../components/MagicWidget";

const WalletPage = () => {
  return (
    <div className="wallet-container">
      <Authenticator>
        {({ signOut, user }) => <MagicWidget user={user} signOut={signOut} />}
      </Authenticator>
    </div>
  );
};

export default WalletPage;
