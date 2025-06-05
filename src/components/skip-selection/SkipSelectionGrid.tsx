import type { SkipOption } from '../../api/skipService';
import { SkipCard } from './SkipCard';

interface SkipSelectionGridProps {
  skipOptions: SkipOption[];
  selectedSkip?: number;
  onSkipSelect: (skipId: number | undefined) => void;
  variant: 'visual' | 'detailed';
}

export const SkipSelectionGrid = ({ 
  skipOptions, 
  selectedSkip, 
  onSkipSelect, 
  variant 
}: SkipSelectionGridProps) => {
  const handleSkipClick = (skipId: number) => {
    onSkipSelect(selectedSkip === skipId ? undefined : skipId);
  };

  if (variant === 'visual') {
    return (
      <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
        <div className="flex flex-col space-y-4 md:space-y-6">
          {skipOptions.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={selectedSkip === skip.id}
              onSelect={handleSkipClick}
              variant="visual"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skipOptions.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedSkip === skip.id}
            onSelect={handleSkipClick}
            variant="detailed"
          />
        ))}
      </div>
    </div>
  );
};
