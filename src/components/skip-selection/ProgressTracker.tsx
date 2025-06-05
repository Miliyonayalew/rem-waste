import { useState } from 'react';
import { Check } from "lucide-react";
import { steps } from '../../constants/skipSectionPage';

interface ProgressTrackerProps {
  className?: string;
}

export const ProgressTracker = ({ className = "" }: ProgressTrackerProps) => {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  return (
    <div className={`bg-[#2D3748] text-white py-8 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Desktop Progress Steps with Individual Progress */}
          <div className="hidden md:flex items-center justify-center relative px-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              return (
                <div key={step.id} className="flex items-center justify-center flex-1 relative">
                  <div className="flex flex-col items-center justify-center relative z-10">
                    <div
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300 relative z-10
                        ${step.completed ? "bg-[#68D391] shadow-lg" : step.active ? "bg-[#F6AD55] shadow-lg" : "bg-[#4A5568]"}
                      `}
                    >
                      {step.completed ? (
                        <Check className="w-5 h-5 text-white" />
                      ) : (
                        <Icon className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <span
                      className={`text-sm font-medium text-center ${
                        step.completed || step.active ? "text-white" : "text-[#A0AEC0]"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {!isLast && (
                    <div className="absolute left-1/2 top-5 w-full h-1 z-0">
                      <div className="ml-5 mr-5 h-full relative">
                        <div className="absolute inset-0 bg-[#4A5568] rounded-full"></div>
                        <div
                          className={`absolute inset-0 rounded-full transition-all duration-500 ${
                            step.completed ? "bg-[#68D391]" : "bg-[#4A5568]"
                          }`}
                          style={{
                            width: step.completed ? "100%" : "0%",
                          }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Progress Steps - Icons Only with Individual Progress */}
          <div className="md:hidden flex items-center justify-center relative px-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isHovered = hoveredStep === step.id;
              const isLast = index === steps.length - 1;
              return (
                <div key={step.id} className="flex items-center justify-center flex-1 relative">
                  <div
                    className="flex flex-col items-center justify-center relative z-10"
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                    onClick={() => setHoveredStep(isHovered ? null : step.id)}
                  >
                    <div
                      className={`
                        w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform relative z-10
                        ${step.completed ? "bg-[#68D391] scale-110" : step.active ? "bg-[#F6AD55] scale-110" : "bg-[#4A5568]"}
                        ${isHovered ? "scale-125 shadow-lg" : ""}
                        ${step.completed || step.active ? "text-white" : "text-[#A0AEC0]"}
                      `}
                    >
                      {step.completed ? (
                        <Check className={`w-4 h-4 transition-all duration-200 ${isHovered ? "w-5 h-5" : ""}`} />
                      ) : (
                        <Icon className={`w-4 h-4 transition-all duration-200 ${isHovered ? "w-5 h-5" : ""}`} />
                      )}
                    </div>

                    {/* Tooltip */}
                    {isHovered && (
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-50">
                        <div className="bg-[#1A202C] text-white text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap animate-in fade-in-0 zoom-in-95 duration-200">
                          {step.label}
                          <div className="absolute top-[-4px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-[#1A202C]"></div>
                        </div>
                      </div>
                    )}
                  </div>
                  {!isLast && (
                    <div className="absolute left-1/2 top-4 w-full h-0.5 z-0">
                      <div className="ml-4 mr-4 h-full relative">
                        <div className="absolute inset-0 bg-[#4A5568] rounded-full"></div>
                        <div
                          className={`absolute inset-0 rounded-full transition-all duration-500 ${
                            step.completed ? "bg-[#68D391]" : "bg-[#4A5568]"
                          }`}
                          style={{
                            width: step.completed ? "100%" : "0%",
                          }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
