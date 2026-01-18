// components/ActionButtons.tsx
import React from "react";
import { FunnelIcon } from "@heroicons/react/24/outline";

const ActionButtons: React.FC = () => {
  return (
    <div className="flex gap-3 mt-4">
      <button className="flex items-center gap-2 px-4 py-2 border border-[#E9E9E9] rounded-full text-sm text-gray-[#161117] ">
        Filter
        <FunnelIcon className="w-4 h-4" />
      </button>
      <button className="px-4 py-2 border border-[#E9E9E9] rounded-full text-sm text-[#161117] hover:text-white">
        Sort by:{" "}
        <span className="ml-1 font-medium text-[#161117]">Highest Price</span>
      </button>
    </div>
  );
};

export default ActionButtons;
