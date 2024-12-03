import React from "react";
import JobCard from "./JobCard";

interface Job {
  job_title: string;
  company_name: string;
  company_description: string;
  employee_count: string;
  job_type: string;
  badges: string[];
  image_url: string | null;
}

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  console.log(jobs);
  if ('error' in jobs) {
    return <div>No jobs found for the given keyword</div>;
  }
  if (jobs.length === 0) {
    return <div>Search in searchbar</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px",
        padding: "10px",
      }}
    >
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default JobList;
