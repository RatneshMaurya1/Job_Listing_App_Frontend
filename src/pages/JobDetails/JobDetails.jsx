import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { jobById } from '../../services'; 

const JobDetails = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    const fetchJobDetail = async () => {
      if (!id) {
        toast.error("Invalid job ID");
        return;
      }
      try {
        const response = await jobById(id);
        setJobDetails(response); 
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchJobDetail();
  }, [id]);

  return (
    <div>
      <h1>Job Details</h1>
      {jobDetails ? (
        <div>
          <h2>{jobDetails.jobPosition}</h2>
          <p><strong>Company:</strong> {jobDetails.company}</p>
          <p><strong>Salary:</strong> {jobDetails.salary}</p>
          <p><strong>Location:</strong> {jobDetails.location}</p>
          <p><strong>Description:</strong> {jobDetails.description}</p>
        </div>
      ) : (
        <p>Loading job details...</p>
      )}
    </div>
  );
};

export default JobDetails;

