import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

/* Images & icons */
import { MenuRounded, CloseRounded } from "@mui/icons-material";

/* UI Data */
import { navItems } from "../constants/uiData";

import { useRouter } from "next/router";
import * as routes from "../constants/routePaths";

const Hook = () => {
  const router = useRouter();

  const [navToggle, setNavToggle] = useState(false);

  const handleNavActivate = (item) => {

  };

  const navigateToHome = () => {
    router.push("/");
  };

  const isHome = router.asPath === routes.HOME;
  const current = 'HOME';

  return [
    isHome,
    current,
    navToggle,

    /* actions */

    handleNavActivate,
    navigateToHome,
    setNavToggle,
  ];
};

const NavBar = () => {

  return (
    // <nav
    //   className={`absolute top-0 left-0 right-0 z-[500] ${
    //     !isHome && "bg-dark shadow-sm shadow-secondary sticky"
    //   }`}
    // >
    //   <h1>Nav Update</h1>
    //   {/* Laptops view */}
    //   <div
    //     className={`lg:container md:px-4 lg:px-4 xl:px-0  hidden lg:flex justify-between items-center ${
    //       isHome ? "py-4" : "py-2"
    //     }`}
    //   >
    //     <Image
    //       src={"/assets/cine-logo.png"}
    //       alt="CINE logo"
    //       width={isHome ? 153 : 89}
    //       height={isHome ? 62 : 35.98}
    //       onClick={navigateToHome}
    //       className="cursor-pointer"
    //     />

    //     <ul className="nav-items flex list-none font-primary font-medium gap-x-4 p-0">
    //       {navItems.map((item, index) => {
    //         let routeToGo = () => {
    //           if (item === "home") {
    //             return "/";
    //           } else if (item === "movies") {
    //             return "/discover/movies/popular";
    //           } else if (item === "series") {
    //             return "/discover/series/popular";
    //           } else {
    //             return `/${item}`;
    //           }
    //         };
    //         return (
    //           <li
    //             key={index}
    //             onClick={() => handleNavActivate(item)}
    //             className={`capitalize text-wah relative flex justify-center items-center`}
    //           >
    //             <Link className="p-['15px']" href={routeToGo()}>
    //               {item}
    //             </Link>

    //             <span
    //               className={`absolute bg-light h-[2px] origin-center rounded-md w-full bottom-2 transition-all ${
    //                 current === item ? "scale-x-100" : "scale-x-0"
    //               }`}
    //             ></span>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>

    //   {/* Mobile view */}
    //   <div className="container relative py-4 px-4 flex lg:hidden justify-between items-center">
    //     <Image
    //       src={"/assets/cine-logo.png"}
    //       alt="CINE logo"
    //       width={105}
    //       height={42.45}
    //       onClick={() => {
    //         setNavToggle(false);
    //         navigateToHome();
    //       }}
    //       className="cursor-pointer"
    //     />

    //     <ul
    //       className={`nav-items transition-all bg-gradient-to-b from-dark to-secondary absolute top-16 left-0 right-0 list-none font-primary font-medium gap-x-4 pb-4 ${
    //         navToggle ? "visible opacity-100" : "opacity-0 invisible"
    //       }`}
    //     >
    //       {navItems.map((item, index) => {
    //         return (
    //           <li
    //             key={index}
    //             onClick={() => {
    //               handleNavActivate(item);
    //               setNavToggle((prev) => !prev);
    //             }}
    //             className={`capitalize text-wah relative flex justify-center items-center`}
    //           >
    //             <Link
    //               className="p-['15px']"
    //               href={`/${item === "home" ? "" : item}`}
    //             >
    //               {item}
    //             </Link>

    //             <span
    //               className={`absolute bg-light h-[2px] origin-center rounded-md w-1/2 lg:w-full bottom-2 transition-all ${
    //                 current === item ? "scale-x-100" : "scale-x-0"
    //               }`}
    //             ></span>
    //           </li>
    //         );
    //       })}
    //     </ul>

    //     <button
    //       onClick={() => setNavToggle((prev) => !prev)}
    //       className="bg-transparent outline-none border-none text-wah"
    //     >
    //       {navToggle ? (
    //         <CloseRounded fontSize="large" />
    //       ) : (
    //         <MenuRounded fontSize="large" />
    //       )}
    //     </button>
    //   </div>
    // </nav>
    <nav>
      <h1>THis is a NavBar.</h1>
    </nav>
  );
};

export default NavBar;
