import { CiFileOn } from "react-icons/ci";
import { FaFolder } from "react-icons/fa";

import { FileType } from "@/types";
import { NODE_TYPES } from "@/helpers/constants";

interface IIcons {
  type: FileType;
}

export function Icons({ type }: IIcons) {
  return <>{type === NODE_TYPES.FILE ? <CiFileOn /> : <FaFolder />}</>;
}
