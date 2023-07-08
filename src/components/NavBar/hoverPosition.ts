import { HoverPosition } from "@/type";
import sections from "./sections";

const hoverPosition: HoverPosition = (sectionHover) => {
  return sections
    .slice(0, sectionHover)
    .reduce((acc, curr) => acc + curr.width + 12, 0);
};

export default hoverPosition;
