import { Calendar, Check, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SkipOption } from '../../api/skipService';
import { getSkipDescription, getSuitableFor } from '../../constants/skipSectionPage';
import { getSkipColor, calculateFinalPrice } from '@/utils/skipSectionPage';

interface SkipCardProps {
  skip: SkipOption;
  isSelected: boolean;
  onSelect: (skipId: number) => void;
  variant: 'visual' | 'detailed';
}

export const SkipCard = ({ skip, isSelected, onSelect, variant }: SkipCardProps) => {
  const handleClick = () => {
    onSelect(skip.id);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(skip.id);
  };

  if (variant === 'visual') {
    return (
      <div
        className={`
          relative rounded-lg p-3 md:p-4 cursor-pointer transition-all duration-200
          ${isSelected ? "bg-[#FFF5EB] border-2 border-[#F6AD55]" : "bg-white border border-gray-200 hover:border-[#F6AD55]"}
        `}
        onClick={handleClick}
      >
        {/* Mobile Layout */}
        <div className="flex flex-col sm:hidden space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-3 flex-shrink-0">
                <div className="relative">
                  <div
                    className="rounded-md flex items-end justify-center overflow-hidden shadow-md"
                    style={{
                      width: `${Math.max(35, skip.size * 2)}px`,
                      height: `${Math.max(30, skip.size * 2)}px`,
                      backgroundColor: getSkipColor(skip.size),
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{skip.size}YD</span>
                    </div>
                    <div
                      className="w-full h-1/3 self-end"
                      style={{ backgroundColor: `${getSkipColor(skip.size)}99` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex-grow min-w-0">
                <h3 className="text-base font-semibold text-[#2D3748] truncate">{skip.size} Yard Skip</h3>
                <div className="flex items-center text-xs text-[#718096]">
                  <Calendar className="w-3 h-3 mr-1 flex-shrink-0" />
                  <span>{skip.hire_period_days} day hire</span>
                </div>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-lg font-bold text-[#2D3748]">£{calculateFinalPrice(skip)}</div>
            </div>
          </div>
          <p className="text-sm text-[#718096]">{getSkipDescription(skip.size)}</p>
          {!skip.allowed_on_road && (
            <div className="inline-flex items-center bg-amber-50 border border-amber-200 rounded-md p-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0" />
              <span className="text-sm text-amber-800 font-medium">Not Allowed on the road</span>
            </div>
          )}
          <Button
            size="sm"
            aria-label="Select this skip"
            className={`w-full ${
              isSelected
                ? "bg-[#F6AD55] hover:bg-[#ED8936] text-white"
                : "bg-white border border-[#CBD5E0] text-[#4A5568] hover:bg-gray-50"
            }`}
            onClick={handleButtonClick}
          >
            {isSelected ? "Selected" : "Select"}
          </Button>
        </div>

        {/* Desktop/Tablet Layout */}
        <div className="hidden sm:flex items-center">
          <div className="mr-6 flex-shrink-0">
            <div className="relative">
              <div
                className="rounded-md flex items-end justify-center overflow-hidden shadow-md"
                style={{
                  width: `${Math.max(40, skip.size * 6)}px`,
                  height: `${Math.max(40, skip.size * 4)}px`,
                  backgroundColor: getSkipColor(skip.size),
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{skip.size}YD</span>
                </div>
                <div
                  className="w-full h-1/3 self-end"
                  style={{ backgroundColor: `${getSkipColor(skip.size)}99` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Skip Details */}
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-[#2D3748]">{skip.size} Yard Skip</h3>
                <p className="text-sm text-[#718096] mb-1">{getSkipDescription(skip.size)}</p>
                <div className="flex items-center text-xs text-[#718096]">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{skip.hire_period_days} day hire</span>
                </div>
                {!skip.allowed_on_road && (
                  <div className="inline-flex items-center bg-amber-50 border border-amber-200 rounded-md p-2 mt-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0" />
                    <span className="text-sm text-amber-800 font-medium">Not Allowed on the road</span>
                  </div>
                )}
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-[#2D3748]">£{calculateFinalPrice(skip)}</div>
                <Button
                  size="sm"
                  aria-label="Select this skip"
                  className={`mt-2 ${
                    isSelected
                      ? "bg-[#F6AD55] hover:bg-[#ED8936] text-white"
                      : "bg-white border border-[#CBD5E0] text-[#4A5568] hover:bg-gray-50"
                  }`}
                  onClick={handleButtonClick}
                >
                  {isSelected ? "Selected" : "Select"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Detailed variant
  return (
    <div
      className={`
        relative rounded-lg overflow-hidden transition-all duration-200 h-full flex flex-col cursor-pointer
        ${isSelected ? "ring-2 ring-[#F6AD55] transform scale-[1.02]" : "border border-gray-200 hover:border-[#F6AD55]"}
      `}
      onClick={handleClick}
    >
      {/* Selected Tick - Center of Card */}
      {isSelected && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="bg-[#F6AD55] rounded-full p-2 shadow-lg">
            <Check className="w-6 h-6 text-white" />
          </div>
        </div>
      )}

      <div className="p-4 flex flex-col h-full">
        <div
          className="rounded-lg p-3 mb-4 text-center"
          style={{ backgroundColor: `${getSkipColor(skip.size)}20` }}
        >
          <h3 className="text-xl font-bold text-[#2D3748]">{skip.size} Yard</h3>
          <div className="text-2xl font-bold" style={{ color: getSkipColor(skip.size) }}>
            £{calculateFinalPrice(skip)}
          </div>
        </div>

        <div className="space-y-3 mb-4 flex-grow">
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 mr-2 text-[#718096]" />
            <span>{skip.hire_period_days} day hire period</span>
          </div>

          {!skip.allowed_on_road && (
            <div className="inline-flex items-center bg-amber-50 border border-amber-200 rounded-md p-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0" />
              <span className="text-sm text-amber-800 font-medium">Not Allowed on the road</span>
            </div>
          )}

          <p className="text-sm">{getSkipDescription(skip.size)}</p>

          <div>
            <p className="text-xs font-semibold mb-1 text-[#718096]">SUITABLE FOR:</p>
            <ul className="text-sm space-y-1">
              {getSuitableFor(skip).map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-4 h-4 mr-1 text-[#68D391] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Button
          aria-label="Select this skip"
          className={`w-full mt-auto ${
            isSelected
              ? "bg-[#F6AD55] hover:bg-[#ED8936]"
              : "bg-[#EDF2F7] text-[#4A5568] hover:bg-[#E2E8F0]"
          }`}
          onClick={handleButtonClick}
        >
          {isSelected ? "Selected" : "Select This Skip"}
        </Button>
      </div>
    </div>
  );
};
