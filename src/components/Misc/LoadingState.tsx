import React from "react";

interface LoadingStateProps {
  message: string;
  is_loading: boolean;
}

const LoadingState = ({ message, is_loading }: LoadingStateProps) => {

  if (!is_loading) return null;
  return (
    <div data-testid="loading-state" className="text-center">
      {message}
    </div>
  );

};

export default LoadingState;
