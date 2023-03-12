import Image from "next/image";

const NavBar = () => {
  return (
    <nav>
      <h1>THis is a NavBar.</h1>
      <Image
        src={"/assets/cine-logo.png"}
        alt="CINE logo"
        width={153}
        height={62}
        className="cursor-pointer"
      />
    </nav>
  );
};

export default NavBar;
