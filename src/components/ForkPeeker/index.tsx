import React from "react";
import ForkIntreface from './../../interfaces/ForkIntreface';
import css from './style.module.scss';
import EmptyState from "./../Misc/EmptyState";

interface GistsListProps {
  forks: Array<ForkIntreface>;
  peeked: boolean;
}

const ForkPeeker = ({ forks, peeked }: GistsListProps) => {

  if (!peeked) return null;

  if (peeked && forks.length === 0) {
    return <EmptyState is_empty={true}/>
  }

  return (
    <ul className="list-unstyled my-3">
      {forks.map((fork) => (
        <li key={fork.id} className="fork-item d-flex align-items-center mb-3">
          <div className="mr-3">
            <a href={fork.html_url} target="_blank" rel="noopener noreferrer">
              <img
                src={fork.owner.avatar_url}
                className={[css["avatar"], "rounded-circle"].join(" ")}
                alt="github user avatar"
              />
            </a>
          </div>
          <div>
            <h6 className="mb-0">{fork.owner.login}</h6>
            <p className="mb-0 small text-secondary">{fork.owner.type}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ForkPeeker;