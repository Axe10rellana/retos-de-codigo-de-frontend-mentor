//react
import { createContext, useContext, useEffect, useState } from "react";

//context
const BlogrContext = createContext();

//hook context
export const useBlogr = () => {
  return useContext(BlogrContext);
};

//provider
export const BlogrProvider = ({ children }) => {
  //state variables
  const [openProduct, setOpenProduct] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const [openConnect, setOpenConnect] = useState(false);
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  //functions
  const handleClick = (id) => {
    if (window.innerWidth < 768) {
      const idToFunctionMap = {
        1: () => setOpenProduct(!openProduct),
        2: () => setOpenCompany(!openCompany),
        3: () => setOpenConnect(!openConnect),
      };
      const selectedFunction = idToFunctionMap[id];

      if (selectedFunction) {
        selectedFunction();
      }
    }
  };

  const handleHover = (id) => {
    if (window.innerWidth < 768) {
      return;
    }

    const idToOpenFunction = {
      1: { product: true, company: false, connect: false },
      2: { product: false, company: true, connect: false },
      3: { product: false, company: false, connect: true },
    };
    const { product, company, connect } = idToOpenFunction[id] || {};

    if (
      product !== undefined &&
      company !== undefined &&
      connect !== undefined
    ) {
      setOpenProduct(product);
      setOpenCompany(company);
      setOpenConnect(connect);
    }
  };

  const handleLeave = () => {
    if (window.innerWidth > 768) {
      const elementsToClose = [setOpenProduct, setOpenCompany, setOpenConnect];

      elementsToClose.forEach((closeFunction) => closeFunction(false));
    }
  };

  //useEffect
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const value = {
    isOpen,
    setIsOpen,
    openProduct,
    openCompany,
    openConnect,
    handleClick,
    handleHover,
    handleLeave,
  };

  return (
    <BlogrContext.Provider value={value}>{children}</BlogrContext.Provider>
  );
};
