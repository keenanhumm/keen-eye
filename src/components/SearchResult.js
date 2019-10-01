import React from 'react';

export default (props) => {
  const { result } = props;
  return (
    <img
      key={result.href}
      className="preview-image"
      src={result.links.find(link => link.rel === "preview").href}
      alt=""
    />
  );
}