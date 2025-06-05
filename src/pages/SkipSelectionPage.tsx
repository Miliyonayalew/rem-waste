import { useState } from 'react';
import { useSkipOptions } from '../query/useSkipOptions';
import {
  ProgressTracker,
  SkipSelectionTabs,
  SelectedSkipSummary,
  LoadingState,
  ErrorState,
  PageHeader
} from '../components/skip-selection';

const SkipSelectionPage = () => {
  const { 
    data: skipOptions, 
    isLoading, 
    isError, 
    error 
  } = useSkipOptions("NR32", "Lowestoft");
  const [selectedSkip, setSelectedSkip] = useState<number>();
  const [activeView, setActiveView] = useState<string>("visual");

  const selectedSkipData = skipOptions?.find((skip) => skip.id === selectedSkip);

  const handleSkipSelect = (skipId: number | undefined) => {
    setSelectedSkip(skipId);
  };

  const handleBack = () => {
    console.log('Navigate back');
  };

  const handleContinue = () => {
    console.log('Continue to next step');
  };

  return (
    <div className="min-h-screen bg-[#FFFAF0] text-[#2D3748]">
      <ProgressTracker />

      <main className="container mx-auto px-4 py-10 sm:py-0">
        <div className="max-w-4xl mx-auto">
          <PageHeader />

          {isError && <ErrorState error={error} />}
          {isLoading && <LoadingState />}

          {!isLoading && !isError && skipOptions && (
            <SkipSelectionTabs
              skipOptions={skipOptions}
              selectedSkip={selectedSkip}
              onSkipSelect={handleSkipSelect}
              activeView={activeView}
              onViewChange={setActiveView}
            />
          )}
        </div>
      </main>

      {selectedSkipData && !isLoading && !isError && (
        <SelectedSkipSummary
          selectedSkip={selectedSkipData}
          onBack={handleBack}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
};

export default SkipSelectionPage;
