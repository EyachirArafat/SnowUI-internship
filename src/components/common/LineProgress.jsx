import React from "react";
import { cn } from "../../utils/lib/cn";

export const LineProgress = ({ className, arrNum }) => {
  const colorSteps = [
    "bg-gray-600",
    "bg-gray-500",
    "bg-gray-400",
    "bg-gray-300",
    "bg-gray-200",
    "bg-gray-100",
  ];
  const segmentWidth = `${100 / arrNum}%`;

  return (
    <div className="flex gap-1 flex-nowrap">
      {Array.from(Array(arrNum).keys()).map((el, index) => (
        <div
          key={el}
          style={{ width: segmentWidth }}
          className={cn(
            "h-[6px] rounded-full",
            colorSteps[index] || "bg-gray-100",
            className
          )}
        />
      ))}
    </div>
  );
};
