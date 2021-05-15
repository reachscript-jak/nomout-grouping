type Props = {
  children: React.ReactNode;
};

const Container: React.VFC<Props> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Container;
