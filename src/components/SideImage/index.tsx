import React, { PropsWithChildren } from "react";

const SideImage: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {children}
    </div>
  );
};

export default SideImage;
