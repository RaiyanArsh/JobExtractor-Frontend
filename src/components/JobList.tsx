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
  if (jobs.length === 0) {
    return <div>No jobs found for the given keyword.</div>;
  }

  return (
    <div
      style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}
    >
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default JobList;
