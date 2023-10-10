import React from 'react';

const CandidateInfo = (props) => {
  const { name, experience, role } = props;

  return (
    <div className="candidate-info">
      <h2>{name}</h2>
      <p>Experience: {experience} years</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default CandidateInfo;
