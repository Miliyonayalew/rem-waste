import { AlertCircle, Loader2 } from "lucide-react";

interface LoadingStateProps {
  className?: string;
}

export const LoadingState = ({ className = "" }: LoadingStateProps) => {
  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <Loader2 className="w-8 h-8 text-[#F6AD55] animate-spin mb-4" />
    </div>
  );
};

interface ErrorStateProps {
  error?: Error | null;
  className?: string;
}

export const ErrorState = ({ error, className = "" }: ErrorStateProps) => {
  return (
    <div className={`bg-red-50 border-l-4 border-red-400 p-4 mb-8 rounded-r-lg ${className}`}>
      <div className="flex items-center">
        <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
        <div>
          <h3 className="text-red-800 font-medium">Unable to load skip options</h3>
          <p className="text-red-700 text-sm mt-1">{error?.message || 'Please try again later'}</p>
        </div>
      </div>
    </div>
  );
};
