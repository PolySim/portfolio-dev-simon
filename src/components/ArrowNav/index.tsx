import { ArrowDown } from "@/styled";

export default function ArrowNav({
  setSectionViewing,
}: {
  setSectionViewing: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  const handleClick = () => {
    setSectionViewing((curr) => (curr === 3 ? 3 : curr + 1));
  };

  return (
    <ArrowDown onClick={handleClick}>
      <svg width="72px" height="72px" viewBox="0 0 24 24" fill="none">
        <path
          id="Vector"
          d="M12 7V17M12 17L16 13M12 17L8 13"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ArrowDown>
  );
}
