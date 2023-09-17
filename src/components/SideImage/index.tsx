import React, { PropsWithChildren } from "react";
import EnergyBanner from "../../assets/Energy_Banner.png";

const SideImage: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex">
      {children}
      <img
        src={EnergyBanner}
        className="max-lg:hidden h-screen w-5/12 object-right-top"
      />
    </div>
  );
};

export default SideImage;
