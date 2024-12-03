import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import JobList from "./components/JobList";
import { ClipLoader } from "react-spinners"; 

interface Job {
  job_title: string;
  company_name: string;
  company_description: string;
  employee_count: string;
  job_type: string;
  badges: string[];
  image_url: string | null;
}

const App: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSearch = (keyword: string) => {
    setLoading(true);
    axios
      .get(`${apiUrl}/scrape?role=${keyword}&country=india`)
      .then((response: any) => {
        setJobs(response.data || []);
        setLoading(false);
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
          <ClipLoader size={50} color={"#007bff"} loading={loading} />
        </div>
      ) : (
        <JobList jobs={jobs} />
      )}
    </div>
  );
};

export default App;
