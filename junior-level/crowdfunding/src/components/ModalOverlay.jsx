const ModalOverlay = ({ isOpen }) => {
  //variables
  const overlayClasses = isOpen
    ? "fixed z-30 top-0 left-0 h-full w-full bg-black/75 opacity-100 transition-opacity duration-500"
    : "hidden";

  return <span className={overlayClasses}></span>;
};

export default ModalOverlay;
