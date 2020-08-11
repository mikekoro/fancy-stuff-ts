import React, { useState } from 'react';

interface SearchFormProps {
  /* should display loading state */
  busy: boolean;
  /* callback to let the parent know about incoming request to search */
  handleSubmit(query: string): void;
}

const SearchForm = ({ handleSubmit, busy }: SearchFormProps) => {
  
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(query);
  };

  return (
    <form
      data-testid="search-form"
      onSubmit={(e) => submit(e)}
      className="my-3"
    >
      <div className="form-group">
        <label htmlFor="username">Github Username:</label>
        <input
          data-testid="search-input"
          type="text"
          required
          className="form-control"
          id="username"
          aria-describedby="githubUsername"
          placeholder="Type here..."
          onChange={handleChange}
          value={query}
        />
        <small id="githubUsernameHelp" className="form-text text-muted">
          eg. gaearon
        </small>
      </div>
      <button type="submit" className="btn btn-primary" disabled={busy}>
        Search
      </button>
    </form>
  );

};

export default SearchForm;
