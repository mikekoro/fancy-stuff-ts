import React from "react";

interface ErrorStateProps {
  error: any
}

const ErrorState = ({ error }: ErrorStateProps) => {

  if (!error) return null;
  return (
    <div className="alert alert-warning">
      Error! Something went wrong.
      <samp className="d-block small mt-2">
        {error.response && error.response.data ? (
          <span>{JSON.stringify(error.response.data)}</span>
        ) : null}
      </samp>
    </div>
  );

};

export default ErrorState;
