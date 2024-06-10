import { useEffect, useRef } from "react";
export function useOutsideClick(handler, isCapturingPhase = true) {
  const ref = useRef();
  useEffect(
    function () {
      const handleCloseModal = (e) => {
        console.log(e.target, ref.current);
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      };
      document.addEventListener("click", handleCloseModal, isCapturingPhase);
      return () =>
        document.removeEventListener(
          "click",
          handleCloseModal,
          isCapturingPhase
        );
    },

    [handler, isCapturingPhase]
  );
  return ref;
}
