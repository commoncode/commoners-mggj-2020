import { useEffect, useState, useRef } from "react";

const useEvent = () => {
  const [showActions, setShowActions] = useState(false);
  const ref = useRef(null);

  const handleClickInside = event => {
    if (
      ref &&
      ref.current &&
      ref.current.contains(event.target) &&
      !showActions
    ) {
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

  return { ref, showActions, setShowActions };
};

export default useEvent;
