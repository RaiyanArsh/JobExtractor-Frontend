import React from 'react';
import "./JobCard.css"

interface Job {
  job_title: string;
  company_name: string;
  company_description: string;
  employee_count: string;
  job_type: string;
  badges: string[];
  image_url: string | null;
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.job_title}</h3>
      <p><strong>Company:</strong> {job.company_name}</p>
      <p><strong>Description:</strong> {job.company_description}</p>
      <p><strong>Employee Count:</strong> {job.employee_count}</p>
      <p><strong>Job Type:</strong> {job.job_type}</p>
      {/* {job.image_url && <img src={job.image_url} alt="Company Logo" />} */}
      <div>
        <strong>Badges:</strong>
        <ul>
          {job.badges.map((badge, index) => (
            <li key={index}>{badge}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobCard;
