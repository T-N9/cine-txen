import Image from "next/image";

import Link from "next/link";

import { useState } from "react";

/* Images & icons */
import { MenuRounded, CloseRounded } from "@mui/icons-material";

/* UI Data */
import { navItems } from "../constants/uiData";

import { useRouter } from "next/router";
import * as routes from "../constants/routePaths";

const NavBar = () => {
  return (
    <nav>
      <h1>THis is a NavBar.</h1>
      <Link href='/'>
        <Image
          src={"/assets/cine-logo.png"}
          alt="CINE logo"
          width={153}
          height={62}
          className="cursor-pointer"
        />
      </Link>
    </nav>
  );
};

export default NavBar;
