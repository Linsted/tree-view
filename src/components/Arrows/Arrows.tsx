import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

interface IArrows {
  isOpen: boolean;
}

export function Arrows({ isOpen }: IArrows) {
  return <>{isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</>;
}
