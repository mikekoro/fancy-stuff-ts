import React, {Fragment,useState} from "react";
import FileParser from "./../FileParser";
import ForkPeeker from "./../ForkPeeker";
import GistIntreface from './../../interfaces/GistIntreface';
import ForkIntreface from './../../interfaces/ForkIntreface';
import { lookupForks } from "./../../helpers/lookupForks";
import css from './style.module.scss';

interface GistItemProps {
  gist: GistIntreface;
}

const GistItem = ({ gist }: GistItemProps) => {

  const [loading, setLoading] = useState<boolean>(false);
  const [peeked, setPeeked] = useState<boolean>(false);
  const [forks, setForks] = useState<Array<ForkIntreface>>([]);

  const handleForksLookup = async (forks_url:string, limit:number): Promise<void> => {
    setLoading(true);
    const [error, response] = await lookupForks(forks_url, limit);
    if (error) {
      setLoading(false);
      return;
    } else if(response) {
      setForks(response.data);
    }
    setPeeked(true);
    setLoading(false);
    
  };

  return (
    <Fragment>
      <h5
        className={[css["some-useless-css-rule"], "font-weight-bold"].join(" ")}
      >
        {gist.description ? gist.description : "Unnamed Gist"}
      </h5>
      <FileParser files={gist.files}/>
      <button
          className="btn btn-primary btn-sm"
          disabled={loading}
          onClick={() => handleForksLookup(gist.forks_url, 3)}
        >
          Peek Forks
        </button>
      <ForkPeeker forks={forks} peeked={peeked} />
      {/*
        <button
          className="btn btn-primary btn-sm"
          disabled={loading}
          onClick={() => handleForksLookip(gist.forks_url, 3)}
        >
          Peek Forks
        </button>
        <LoadingState isLoading={loading} message="Loading possible forks..." />
        <ForkPeeker forks={forks} peeked={peeked} />
      */}

    </Fragment>
  );
};

export default GistItem;
