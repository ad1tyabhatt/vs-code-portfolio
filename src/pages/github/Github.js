import React from "react";

const Github = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return <button onClick={() => openInNewTab('https://github.com/ad1tyabhatt')}>Github</button>;
};

export default Github;
