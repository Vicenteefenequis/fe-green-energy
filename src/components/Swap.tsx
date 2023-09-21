interface SwapProps {
  condition: boolean;
  WhenTrue: React.ReactNode;
  WhenFalse: React.ReactNode;
}

function Swap({ condition, WhenTrue, WhenFalse }: SwapProps) {
  if (condition) {
    return <>{WhenTrue}</>;
  }

  return <>{WhenFalse}</>;
}

export default Swap;
