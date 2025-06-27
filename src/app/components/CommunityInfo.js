import React from 'react';
import data from '../data/cosc.json'; // This is the correct relative path

const CommunityInfo = () => {
  return (
    <div>
      <h2>{data.community}</h2>
      <p><strong>Theme:</strong> {data.hackweekTheme}</p>
      <p><strong>Participants:</strong> {data.participants}</p>
      <p>{data.description}</p>
    </div>
  );
};

export default CommunityInfo;
