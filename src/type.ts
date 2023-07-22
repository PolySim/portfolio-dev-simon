import React from "react";

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

export type Projects = ProjectProps[];

export type ProjectProps = {
  name: string;
  demoPath: string;
  sourceCodePath: string;
  imgPath: string;
};

export type IsFormValid = (data: FormValue) => boolean;

export type FormValue = {
  name: string;
  email: string;
  message: string;
};
