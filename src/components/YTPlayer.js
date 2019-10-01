import React from 'react';

export default ({ embedUrl = null }) => {
  if (!embedUrl) {
    return null;
  }
  console.log(embedUrl)
  return (
    <iframe
      title="yt-player"
      style={{
        position: "inline",
        top: 0,
        left: 0,
        maxHeight: "20rem"
      }}
      src={embedUrl}
      frameBorder="0"
    />
  );
};
