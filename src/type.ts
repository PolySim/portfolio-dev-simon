export type Sections = {
  name: string;
  width: number;
}[];

export type NavBarProps = {
  sectionViewing: number;
  setSectionViewing: React.Dispatch<React.SetStateAction<number>>;
};

export type HoverPosition = (sectionHover: number) => number;

export type HandleScroll = (element: HTMLDivElement | null) => void;

export type Skills = {
  frontend: Skill[];
  backend: Skill[];
};

type Skill = {
  name: string;
  path: string;
  background: string;
  doc: string;
};
