//components
import { CustomButton, InputCustom } from ".";

const ButtonGroup = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4 lg:grid-cols-3 lg:grid-rows-2">
      <CustomButton id={5}>%5</CustomButton>
      <CustomButton id={10}>%10</CustomButton>
      <CustomButton id={15}>%15</CustomButton>
      <CustomButton id={25}>%25</CustomButton>
      <CustomButton id={50}>%50</CustomButton>
      <InputCustom />
    </div>
  );
};

export default ButtonGroup;
