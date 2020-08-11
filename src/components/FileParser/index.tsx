import React from 'react';
import GistFile from '../../interfaces/GistFile';

interface FileParserProps {
  files: Array<GistFile>;
}

const FileParser = ({ files }: FileParserProps) => {

  return (
    <ul className="list-unstyled mb-2">
      {Object.entries(files).map(([key, value]) => (
        <li key={Math.random()}>
          <samp className="small">{key}</samp>{" "}
          <span className="badge badge-info small">{value.language}</span>
        </li>
      ))}
    </ul>
  );
};

export default FileParser;
