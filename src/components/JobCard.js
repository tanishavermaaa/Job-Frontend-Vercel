import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      margin: '10px 0'
    }}>
      <h3>{job.role} @ {job.company}</h3>
      <p>Status: {job.status}</p>
      <p>Applied on: {new Date(job.appliedDate).toLocaleDateString()}</p>
      <p>Notes: {job.notes || 'N/A'}</p>
    </div>
  );
};

export default JobCard;
