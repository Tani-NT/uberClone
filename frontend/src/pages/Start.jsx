import { Link } from "react-router-dom";

const Start = () => {
    return (
      <div className="bg-cover xl:bg-center bg-bottom bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?q=80&w=1576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-[10vw] w-full flex flex-col justify-between lg:pt-[5vw]">
        {/* Logo */}
        <img
          className="w-[20vw] ml-[10vw] lg:w-[10vw] lg:ml-[5vw]"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="logo"
        />
  
        {/* Content Box */}
        <div className="bg-white px-[5vw] xl:pb-[2vw] pb-[6vw] lg:px-[10vw] lg:pb-[5vw] lg:max-w-[40vw] lg:ml-[5vw] lg:mt-auto">
          <h2 className="font-bold text-[7vw] pt-[2vw] mb-[5vw] xl:text-[2vw] lg:text-[3vw] lg:mb-[3vw] lg:pt-[1vw]">
            Get Started with Uber
          </h2>
          <Link to='/login' className="flex items-center justify-center w-full bg-black font-semibold py-[1.5vw] text-[5vw] rounded-md text-white lg:py-[1vw] lg:text-[1.5vw]">
            Continue
          </Link>
        </div>
      </div>
    );
  };
  
  export default Start;
  