import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { SkipOption } from '../../api/skipService';
import { SkipSelectionGrid } from './SkipSelectionGrid';

interface SkipSelectionTabsProps {
  skipOptions: SkipOption[];
  selectedSkip?: number;
  onSkipSelect: (skipId: number | undefined) => void;
  activeView: string;
  onViewChange: (view: string) => void;
}

export const SkipSelectionTabs = ({
  skipOptions,
  selectedSkip,
  onSkipSelect,
  activeView,
  onViewChange
}: SkipSelectionTabsProps) => {
  return (
    <Tabs value={activeView} onValueChange={onViewChange} className="mb-24 md:mb-8">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="visual" className="text-base">
          Visual Comparison
        </TabsTrigger>
        <TabsTrigger value="detailed" className="text-base">
          Detailed Specs
        </TabsTrigger>
      </TabsList>

      {/* Visual View */}
      <TabsContent value="visual" className="space-y-8">
        <SkipSelectionGrid
          skipOptions={skipOptions}
          selectedSkip={selectedSkip}
          onSkipSelect={onSkipSelect}
          variant="visual"
        />
      </TabsContent>

      {/* Detailed View */}
      <TabsContent value="detailed">
        <SkipSelectionGrid
          skipOptions={skipOptions}
          selectedSkip={selectedSkip}
          onSkipSelect={onSkipSelect}
          variant="detailed"
        />
      </TabsContent>
    </Tabs>
  );
};
