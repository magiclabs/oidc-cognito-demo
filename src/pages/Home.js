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
    </div>
  );
};

export default Home;
