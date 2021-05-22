// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};
const Header: React.VFC<Props> = () => {
  return (
    <header className="h-24 font-bold">
      <span className=" border-b-2 border-black inline-block pt-5 pl-7 pb-2 text-5xl">Grouping</span>
    </header>
  );
};

// eslint-disable-next-line import/no-default-export
export default Header;
