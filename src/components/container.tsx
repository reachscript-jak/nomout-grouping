type Props = {
  children: React.ReactNode;
};

// eslint-disable-next-line react/prop-types
const Container: React.VFC<Props> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

// eslint-disable-next-line import/no-default-export
export default Container;
