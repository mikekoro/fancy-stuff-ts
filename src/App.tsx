import React, { useState } from 'react';
import SearchForm from "./components/SearchForm";
import GistsList from "./components/GistsList";
import LoadingState from "./components/Misc/LoadingState";
import EmptyState from "./components/Misc/EmptyState";
import ErrorState from "./components/Misc/ErrorState";
import { getGistsByUsername } from "./helpers/getGistsByUsername";
import GistIntreface from './interfaces/GistIntreface';

const App = () => {

  // State
  const [gists, setGists] = useState<Array<GistIntreface>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<object | null>(null);
  const [empty, setEmpty] = useState<boolean>(false);

  // Methods
  const handleSubmit = async (query:string): Promise<void> => {
    
    setError(null); // reset error message just in case
    setGists([]); // cleanup the list of gists just in case
    setLoading(true); // enable loading indicator
    setEmpty(false); // reset empty state

    const [err, response] = await getGistsByUsername(query); // call the API

    if (err) {
      // handle error by removing loading indicator & displaing the error message component
      setLoading(false);
      setError(err);
      return;
    }

    if (response && response.data.length === 0) {
      setEmpty(true); // enable empty state if no results were returned
    } else if(response) {
      setGists(response.data); // populate the list of Gists
    }
    setLoading(false); // remove loading indicator
    
  }

  return (
    <div className="container" data-testid="home-wrapper">
      <div className="row justify-content-center">
        <div className="col-md-8 col-12">
          <SearchForm busy={loading} handleSubmit={handleSubmit} />
          <GistsList gists={gists} />
          <LoadingState is_loading={loading} message="Loading public gists..." />
          <EmptyState is_empty={empty} />
          <ErrorState error={error} />
        </div>
      </div>
    </div>
  ) 
};

export default App;
