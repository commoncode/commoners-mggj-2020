import { useEffect, useState, useRef } from "react";

const useEvent = () => {
  const [showActions, setShowActions] = useState(false);
  const [coordsActions, setCoordsActions] = useState({ x: null, y: null });
  const ref = useRef(null);

  const calcCoordsOnClick = e => {
    const rect = e.target.parentElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    console.log(x,y)
    setCoordsActions({ x, y });
  };

  const handleClickInside = e => {
    if (ref && ref.current && ref.current.contains(e.target) && !showActions) {
      setShowActions(true);
    } else {
      setShowActions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickInside, true);

    return () => {
      document.removeEventListener("click", handleClickInside, true);
    };
  }, []);

  return {
    ref,
    showActions,
    setShowActions,
    coordsActions,
    setCoordsActions,
    calcCoordsOnClick
  };
};

export default useEvent;
