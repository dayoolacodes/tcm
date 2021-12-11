import React from "react";

export default function useWindowSize() {
  const [dimensions, setDimensions] = React.useState({ width: undefined, height: undefined });

  React.useEffect(() => {
    const resizeFunc = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resizeFunc);

    resizeFunc();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", resizeFunc);
  }, []);

  return dimensions;
}
