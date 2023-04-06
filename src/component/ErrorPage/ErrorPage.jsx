import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.error(error);
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
            <h2 className="card-title">Oops!</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {/* <i>{error.statusText || error.message}</i> */}
            </p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-ghost">Deny</button>
            </div>
        </div>
  </div>
  );
};

export default ErrorPage;
