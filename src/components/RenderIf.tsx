import React from "react";

interface RenderIfProps {
  condition: boolean;
  children: React.ReactNode;
}

function RenderIf({ condition, children }: RenderIfProps) {
  if (condition === false) {
    return null;
  }

  return <>{children}</>;
}

export default RenderIf;
