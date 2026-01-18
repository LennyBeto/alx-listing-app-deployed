import React from "react";
import Pill from "./Pill";
import ActionButtons from "./ActionButtons";

interface FilterSectionProps {
  filters: string[];
  activeFilter: string;
  onSelect: (filter: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  filters,
  activeFilter,
  onSelect,
}) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-4">
      {/* Pills Section */}
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            isActive={activeFilter === filter}
            onClick={() => onSelect(filter)}
          />
        ))}
      </div>

      {/* Actions (Sort / Filter) */}
      <div className="flex-shrink-0">
        <ActionButtons />
      </div>
    </div>
  );
};

export default FilterSection;
