import React from "react";
import { ThreeCircles } from "react-loader-spinner";

// import { Container } from './styles';

type Props = {
  isLoading: boolean;
};

const Loader: React.FC<Props> = ({ isLoading }) => {
  return (
    <ThreeCircles
      height="500"
      width="500"
      color="#4fa94d"
      visible={isLoading}
      ariaLabel="three-circles-rotating"
    />
  );
};

export default Loader;
