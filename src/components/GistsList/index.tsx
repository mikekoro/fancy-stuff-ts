import React from "react";
import GistItem from "./../GistItem/";
import GistIntreface from './../../interfaces/GistIntreface';

interface GistsListProps {
  gists: Array<GistIntreface>;
}

const GistsList = ({ gists }: GistsListProps) => {

  if (gists.length === 0) {
    return null;
  }

  return (
    <ul className="list-group" data-testid="gists-feed">
      {gists.map((gist) => (
        <li className="list-group-item" key={gist.id}>
          <GistItem gist={gist} />
        </li>
      ))}
    </ul>
  );
};

export default GistsList;
