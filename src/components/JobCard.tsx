import React from "react";

interface JobCardProps {
  job: {
    job_title: string;
    company_name: string;
    company_description: string;
    employee_count: string;
    job_type: string;
    badges: string[];
    image_url: string | null;
  };
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const processedImageUrl = job.image_url
    ? job.image_url.split("auto/")[1] 
    : null;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "8px",
        width: "300px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {processedImageUrl ? (
        <img
          src={processedImageUrl}
          alt={`${job.company_name} logo`}
          style={{ width: "112px", height: "112px", objectFit: "cover", borderRadius: "50%" }}
        />
      ) : (
        <div
          style={{
            width: "112px",
            height: "112px",
            borderRadius: "50%",
            background: "#eee",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          No Logo
        </div>
      )}
      <h2 style={{ fontSize: "1.2rem", margin: "8px 0" }}>{job.job_title}</h2>
      <h3 style={{ fontSize: "1rem", color: "#555" }}>{job.company_name}</h3>
      <p style={{ fontSize: "0.9rem", color: "#666" }}>
        {job.company_description}
      </p>
      <p style={{ fontSize: "0.9rem", color: "#666" }}>
        <strong>Employees:</strong> {job.employee_count}
      </p>
      <p style={{ fontSize: "0.9rem", color: "#666" }}>
        <strong>Job Type:</strong> {job.job_type}
      </p>
      {job.badges.length > 0 && (
        <div style={{ marginTop: "8px" }}>
          {job.badges.map((badge, index) => (
            <span
              key={index}
              style={{
                display: "inline-block",
                background: "#007bff",
                color: "#fff",
                padding: "4px 8px",
                borderRadius: "4px",
                fontSize: "0.8rem",
                margin: "4px",
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobCard;
