type FilterChipsProps = {
  options: readonly string[];
  selected: string;
  onSelect: (option: string) => void;
};

export default function FilterChips({ options, selected, onSelect }: FilterChipsProps) {
  return (
    <div className="chips" role="group" aria-label="Filter">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={option === selected}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
