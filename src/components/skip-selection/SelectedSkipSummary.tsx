import { Calendar, Truck, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SkipOption } from '../../api/skipService';
import { getSkipDescription } from '../../constants/skipSectionPage';
import { getSkipColor, calculateFinalPrice } from '@/utils/skipSectionPage';

interface SelectedSkipSummaryProps {
  selectedSkip: SkipOption;
  onBack?: () => void;
  onContinue?: () => void;
}

export const SelectedSkipSummary = ({ 
  selectedSkip, 
  onBack, 
  onContinue 
}: SelectedSkipSummaryProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 lg:sticky lg:bottom-0 bg-gradient-to-r from-[#2D3748] to-[#4A5568] text-white shadow-2xl z-40 border-t-2 border-[#F6AD55] mt-8">
      {/* Mobile Compact Version */}
      <div className="lg:hidden py-3 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1">
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold truncate">{selectedSkip.size} Yard Skip</h3>
              <p className="text-xs text-[#A0AEC0] truncate">
                {selectedSkip.hire_period_days} day hire • £{calculateFinalPrice(selectedSkip)}
              </p>
            </div>
          </div>
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 w-fit xs:w-auto mt-2 xs:mt-0">
              <Button
              variant="outline"
              aria-label="Back to skip selection"
              size="sm"
              className="flex items-center justify-center border-[#CBD5E0] text-[#4A5568] hover:cursor-pointer min-w-[64px] px-2"
              onClick={onBack}
              >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
              </Button>
              <Button
              size="sm"
              aria-label="Continue to next step"
              className="bg-[#F6AD55] hover:bg-[#ED8936] whitespace-nowrap flex-shrink-0 min-w-[64px] px-2"
              onClick={onContinue}
              >
              Continue
              </Button>
            </div>
        </div>
      </div>

      {/* Desktop Enhanced Version */}
      <div className="hidden lg:block py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <div
                className="w-14 h-12 rounded-lg flex items-center justify-center mr-4 shadow-lg"
                style={{ backgroundColor: getSkipColor(selectedSkip.size) }}
              >
                <span className="text-sm font-bold text-white">{selectedSkip.size}YD</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Selected: {selectedSkip.size} Yard Skip</h3>
                <p className="text-sm text-gray-300">{getSkipDescription(selectedSkip.size)}</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-[#F6AD55]" />
                <span>{selectedSkip.hire_period_days} day hire</span>
              </div>
              <div className="flex items-center">
                <Truck className="w-4 h-4 mr-2 text-[#F6AD55]" />
                <span>Delivery included</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-right">
              <div className="text-3xl font-bold text-[#F6AD55]">£{calculateFinalPrice(selectedSkip)}</div>
              <p className="text-xs text-gray-300">Includes VAT & delivery</p>
            </div>
            <div className="flex flex-col space-y-2">
              <Button
                variant="outline"
                size="lg"
                aria-label="Back to skip selection"
                className="flex items-center justify-center border-[#CBD5E0] text-[#4A5568] hover:cursor-pointer"
                onClick={onBack}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button 
                aria-label="Continue to next step"
                className="bg-gradient-to-r from-[#F6AD55] to-[#ED8936] hover:cursor-pointer hover:from-[#ED8936] hover:to-[#DD6B20] text-white font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                onClick={onContinue}
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
