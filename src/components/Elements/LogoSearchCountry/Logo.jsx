import VouchifyLogo from "../../../assets/img/vouchify-logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <a href="index.html">
        <img className="w-32 lg:w-full" src={VouchifyLogo} alt="" />
      </a>
    </div>
  );
};

export default Logo;
