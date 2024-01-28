//react
import { createContext, useContext, useState } from "react";

//context
const CrowdfundingContext = createContext();

//hook context
export const useCrowdfunding = () => {
  return useContext(CrowdfundingContext);
};

//data
import { originalStats } from "../data/data";

//provider
export const CrowdfundingProvider = ({ children }) => {
  //state variables
  const [isOpen, setIsOpen] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalCompletedIsOpen, setModalCompletedIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedModal, setSelectedModal] = useState(null);
  const [radioValues, setRadioValues] = useState({});
  const [stats, setStats] = useState(originalStats);

  //functions
  const handleBookmark = () => setBookmark(!bookmark);
  const handleIsOpen = () => setIsOpen(!isOpen);
  const handleIsClosed = () => setIsOpen(false);
  const handleModalIsOpen = () => setModalIsOpen(true);
  const handleModalIsClosed = () => setModalIsOpen(false);
  const handleRadioChange = (title) => setSelectedOption(title);

  const handleModalCompletedIsOpen = (id) => {
    setSelectedModal(id);
    setModalCompletedIsOpen(true);
  };

  const handleModalCompletedIsClosed = (id) => {
    if (id > 1) {
      const pledgeTagAbout = document.getElementById("pledgeAbout");
      const quantityTagAbout = document.getElementById("quantityAbout");

      const pledgeAmountAboutCurrent = pledgeTagAbout.textContent.trim();
      const match = pledgeAmountAboutCurrent.match(/\$([0-9]+)/);
      let pledgeAmountAboutCurrentNumber = 0;
      if (match) pledgeAmountAboutCurrentNumber = parseInt(match[1]);

      const quantityLeftAboutCurrent = quantityTagAbout.textContent.trim();
      const quantityLeftAboutCurrentNumber = parseInt(quantityLeftAboutCurrent);

      setStats((prevStats) => {
        return prevStats.map((stat) => {
          if (stat.id === 1) {
            return {
              ...stat,
              amount: stat.amount + pledgeAmountAboutCurrentNumber,
            };
          } else if (stat.id === 2) {
            return {
              ...stat,
              amount: stat.amount + 1,
            };
          } else if (stat.id === 3) {
            return {
              ...stat,
              amount: stat.amount + quantityLeftAboutCurrentNumber,
            };
          } else {
            return stat;
          }
        });
      });
    }

    setSelectedModal(null);
    setModalCompletedIsOpen(false);
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
    const quantityTag = document.getElementById("quantity");
    const inputValue = pledgeInput.value.trim();
    const quantityLeftCurrent = quantityTag.textContent.trim();
    const inputValueNumber = parseFloat(inputValue);
    const quantityLeftCurrentNumber = parseInt(quantityLeftCurrent);
    if (inputValue === "") return;

    setStats((prevStats) => {
      return prevStats.map((stat) => {
        if (stat.id === 1) {
          return {
            ...stat,
            amount: stat.amount + inputValueNumber,
          };
        } else if (stat.id === 2) {
          return {
            ...stat,
            amount: stat.amount + 1,
          };
        } else if (stat.id === 3) {
          return {
            ...stat,
            amount: stat.amount + quantityLeftCurrentNumber,
          };
        } else {
          return stat;
        }
      });
    });

    setSelectedOption(null);
    setModalIsOpen(false);
  };

  const value = {
    stats,
    isOpen,
    bookmark,
    modalIsOpen,
    modalCompletedIsOpen,
    selectedOption,
    selectedModal,
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
