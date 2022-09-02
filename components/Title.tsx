import React, { useEffect, useState } from "react";

interface Props {
    inputFn: (count: number, increment: () => void) => JSX.Element ;
}

function Title({ inputFn }: Props): any {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return inputFn(count, increment);
};

export default Title;
