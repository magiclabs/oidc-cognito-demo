import { useEffect, useState } from "react";
import { Magic } from "magic-sdk";
import { OpenIdExtension } from "@magic-ext/oidc";
import PulseLoader from "react-spinners/PulseLoader";
import { WebSocketProvider } from "ethers";

const MagicWidget = ({ user }) => {
  const [metadata, setMetadata] = useState();
  const [balance, setBalance] = useState();
  const [loading, setLoading] = useState(false);
  const magicPublishableKey = "pk_live_E4F135AEC08C0BEB";
  const providerId = "iADLL3f93drBVBQpvwiAWnnBwfrFY4vR_IE5Z7Ob3Uc=";
  const jwt = user.signInUserSession.idToken.jwtToken;

  const magic = new Magic(magicPublishableKey, {
    network: "goerli",
    extensions: [new OpenIdExtension()],
  });

  const loginWithMagic = async () => {
    setLoading(true);
    const did = await magic.openid.loginWithOIDC({ jwt, providerId });
    const data = await magic.user.getMetadata();

    setMetadata(data);

    setLoading(false);
  };

  const getBalance = async () => {
    const provider = new WebSocketProvider(magic.rpcProvider);
    const balance = await provider.getBalance(metadata.publicAddress);
    console.log(balance);
    setBalance(balance);
  };

  useEffect(() => {
    loginWithMagic();
    getBalance();
  }, []);

  return (
    <div>
      {!metadata ? (
        <PulseLoader loading={loading} color="#6851ff" />
      ) : (
        <div>
          <p>
            {metadata.publicAddress.slice(0, 6)}...
            {metadata.publicAddress.slice(-4)}
          </p>
          <p>{balance}</p>
        </div>
      )}
    </div>
  );
};

export default MagicWidget;
