import React from "react";

type Props = {};
const Header: React.VFC<Props> = () => {
  return (
    <header className="h-24">
      <span className=" border-b-2 border-black inline-block pt-5 pl-7 pb-2 text-7xl">Grouping</span>
    </header>
  );
};

export default Header;
