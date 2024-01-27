//react
import { createContext, useContext, useState } from "react";

//context
const CrowdfundingContext = createContext();

//hook context
export const useCrowdfunding = () => {
  return useContext(CrowdfundingContext);
};

//provider
export const CrowdfundingProvider = ({ children }) => {
  //state variables
  const [isOpen, setIsOpen] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalCompletedIsOpen, setModalCompletedIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [radioValues, setRadioValues] = useState({});

  //functions
  const handleBookmark = () => setBookmark(!bookmark);
  const handleIsOpen = () => setIsOpen(!isOpen);
  const handleIsClosed = () => setIsOpen(false);
  const handleModalIsOpen = () => setModalIsOpen(true);
  const handleModalIsClosed = () => setModalIsOpen(false);
  const handleModalCompletedIsOpen = () => setModalCompletedIsOpen(true);
  const handleModalCompletedIsClosed = () => setModalCompletedIsOpen(false);

  const handleRadioChange = (title) => {
    setSelectedOption(title);
  };
  const handleInputIntegerNumbers = (e, selectedOption) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, "");
    setRadioValues((prevValues) => ({
      ...prevValues,
      [selectedOption]: inputValue,
    }));
  };
  const handleButtonContinue = () => {
    const pledgeInput = document.getElementById("pledge");
    const inputValue = pledgeInput.value.trim();

    if (inputValue === "") return;
    setModalIsOpen(false);
  };

  const value = {
    isOpen,
    bookmark,
    modalIsOpen,
    modalCompletedIsOpen,
    selectedOption,
    radioValues,
    handleIsOpen,
    handleBookmark,
    handleIsClosed,
    handleModalIsOpen,
    handleModalIsClosed,
    handleModalCompletedIsOpen,
    handleModalCompletedIsClosed,
    handleRadioChange,
    handleButtonContinue,
    handleInputIntegerNumbers,
  };

  return (
    <CrowdfundingContext.Provider value={value}>
      {children}
    </CrowdfundingContext.Provider>
  );
};
