import JobList from "../components/JobList";
import Albums from "../components/Albums";
import { jobs } from "../lib/fake-data";

function HomePage() {
  const showJobs = 1;
  return (
    <div>
      <h1 className="title">Job Board</h1>
      {showJobs ? <JobList jobs={jobs} /> : ""}
    </div>
  );
}

export default HomePage;
