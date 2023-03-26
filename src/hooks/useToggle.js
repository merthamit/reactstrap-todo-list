import { useState } from "react";

const useToggle = () => {
  const [state, setToggle] = useState(false);

  const toggle = () => {
    setToggle(!state);
  };

  return [state, toggle];
};

export default useToggle;
