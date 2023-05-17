import logo from "../../../assets/png/ecobin.png";
import GlobalButton from "../../common/GlobalButton";

const Header = () => {
  return (
    <div className="w-full h-20 flex justify-center items-center">
      <div className="w-11/12 h-5/6 flex items-center justify-between">
        <img src={logo} alt="" className="h-8" />
        <div className="flex  items-center text-base">
          <p className="p-5">Home</p>
          <p className="p-5">Home</p>
          <p className="p-5">Home</p>
          <p className="p-5">Home</p>
        </div>
        <div className="">
          <GlobalButton name="login" />
          <GlobalButton name="logOut" />
        </div>
      </div>
    </div>
  );
};

export default Header;
