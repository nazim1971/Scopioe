import { FaAngleDown } from "react-icons/fa";
import useAuth from "../Hook/useAuth";
import { IoNotificationsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Nav = () => {
    const {user,logOut} = useAuth();
    const navigate = useNavigate()
    
    const handleSignOut = () => {
      logOut()
      .then(()=>{
        navigate('/')
      })
      .catch();}
    return (
        <div>
            <div className="h-[88px] hidden  md:flex justify-between px-6 border bg-white ">
          
          <div className="flex gap-4 items-center ">
          <img 
                className="h-10 w-10 rounded-full   "
                src={
                  (user && user?.photoURL) ||
                  "user.png"
                }
                alt=""
              />
              <div className="text-sm ">
              <p className="font-semibold flex items-center gap-3" >{user?.displayName} <FaAngleDown /> </p>
                  <p> {user?.email} </p>
              </div>
          </div>
          
           <div className="flex gap-5 items-center">
           <a className="border p-1 rounded-full"><IoNotificationsOutline className="text-2xl  " /></a>
           <div onClick={handleSignOut}  className="flex pl-4 hover:bg-red-100 hover:rounded-xl  border-[#E7E7E7] border-l-2  items-center gap-2">
             <button  className="font-medium text-[#F15E4A] "> Log Out</button> <img src="logout.png" alt="" />
           </div>
           </div>
        </div> 
        {/* small device */}

        <div className="h-[60px] bg-white flex justify-between items-center px-3 ">
        <h1 className="text-[32px]  text-center text-[#4285F3] ">LOGO</h1>
        <div className="flex gap-2">
        <IoNotificationsOutline className="text-2xl  " />
        <HiOutlineMenuAlt3 className="text-2xl  " />

        </div>
        </div>
        </div>
    );
};

export default Nav;