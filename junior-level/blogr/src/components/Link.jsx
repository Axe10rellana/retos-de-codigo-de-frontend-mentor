//context
import { useBlogr } from "../context/BlogrContext";

//components
import { LinkContent } from ".";

const Link = ({ title, id }) => {
  //context variables
  const { handleClick, handleHover, handleLeave } = useBlogr();

  return (
    <li
      className="w-full cursor-pointer"
      onClick={() => handleClick(id)}
      onMouseEnter={() => handleHover(id)}
      onMouseLeave={handleLeave}
    >
      <LinkContent title={title} id={id} />
    </li>
  );
};

export default Link;
