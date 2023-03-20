import { useEffect, useState } from "react";
import { Magic } from "magic-sdk";
import { OpenIdExtension } from "@magic-ext/oidc";

const MagicWidget = ({ user }) => {
  const [metadata, setMetadata] = useState();
  const magicPublishableKey = "pk_live_E4F135AEC08C0BEB";
  const providerId = "iADLL3f93drBVBQpvwiAWnnBwfrFY4vR_IE5Z7Ob3Uc=";
  const jwt = user.signInUserSession.idToken.jwtToken;

  const loginWithMagic = async () => {
    const magic = new Magic(magicPublishableKey, {
      network: "goerli",
      extensions: [new OpenIdExtension()],
    });

    const did = await magic.openid.loginWithOIDC({ jwt, providerId });
    const data = await magic.user.getMetadata();
    setMetadata(data);
  };

  useEffect(() => {
    loginWithMagic();
  }, []);

  return (
    <div>
      <h3>Magic Wallet</h3>
      <p>{JSON.stringify(metadata)}</p>
    </div>
  );
};

export default MagicWidget;