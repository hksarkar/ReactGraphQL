import { getJobs } from "./db/jobs.js";
import { getCompany } from "./db/companies.js";
console.log("gettting companie");
export const resolvers = {
  Query: {
    greeting: () => "Hello world!",
    jobs: () => getJobs(),
  },
  Job: {
    company: (job) => {
      return getCompany(job.companyId);
    },
    date: (job) => toIsoDate(job.createdAt),
  },
};

function toIsoDate(value) {
  return value.slice(0, "yyyy-mm-dd".length);
}
