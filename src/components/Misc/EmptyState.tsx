import React from "react";

interface EmptyStateProps {
  is_empty: boolean;
}

const EmptyState = ({ is_empty }: EmptyStateProps) => {

  if (!is_empty) return null;
  return <div className="text-center">No results were returned:(</div>;

};

export default EmptyState;
