import { useState, useEffect, useMemo } from 'react';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5); // Change this to the number of jobs per page

  // Simulated data, replace this with actual API fetch
  const fetchData = () => {
    // Simulated job data
    const jobData = [
      {
        id: 1,
        title: 'Software Engineer',
        company: 'X Tech Solutions',
        location: 'New York, NY',
        type: 'Full-time',
        postedDate: '2023-11-15',
        deadline: '2023-12-15',
      },
      {
        id: 2,
        title: 'Software Engineer',
        company: 'Y Tech Solutions',
        location: 'New York, NY',
        type: 'Full-time',
        postedDate: '2023-11-15',
        deadline: '2023-12-15',
      },
      {
        id: 3,
        title: 'Software Engineer',
        company: 'G Tech Solutions',
        location: 'New York, NY',
        type: 'Full-time',
        postedDate: '2023-11-15',
        deadline: '2023-12-15',
      },
      {
        id: 4,
        title: 'Software Engineer',
        company: 'D Tech Solutions',
        location: 'New York, NY',
        type: 'Full-time',
        postedDate: '2023-11-15',
        deadline: '2023-12-15',
      },
      {
        id: 5,
        title: 'Software Engineer',
        company: 'ABC Tech Solutions',
        location: 'New York, NY',
        type: 'Full-time',
        postedDate: '2023-11-15',
        deadline: '2023-12-15',
      },
      {
        id: 6,
        title: 'Software Engineer',
        company: 'ABC Tech Solutions',
        location: 'New York, NY',
        type: 'Full-time',
        postedDate: '2023-11-15',
        deadline: '2023-12-15',
      },
      {
        id: 7,
        title: 'Software Engineer',
        company: 'Ultra Tech Solutions',
        location: 'New York, NY',
        type: 'Full-time',
        postedDate: '2023-11-15',
        deadline: '2023-12-15',
      },
      {
        id: 8,
        title: 'Software Engineer',
        company: 'Horizon Tech Solutions',
        location: 'New York, NY',
        type: 'Full-time',
        postedDate: '2023-11-15',
        deadline: '2023-12-15',
      },
      {
        id: 9,
        title: 'Software Engineer',
        company: 'Sunrise Tech Solutions',
        location: 'New York, NY',
        type: 'Full-time',
        postedDate: '2023-11-15',
        deadline: '2023-12-15',
      },
      {
        id: 10,
        title: 'Software Engineer',
        company: 'ABC Tech Solutions',
        location: 'New York, NY',
        type: 'Full-time',
        postedDate: '2023-11-15',
        deadline: '2023-12-15',
      },
      {
        id: 11,
        title: 'Software Engineer',
        company: 'ABC Tech Solutions',
        location: 'New York, NY',
        type: 'Part-time',
        postedDate: '2023-11-15',
        deadline: '2023-12-15',
      },
      {
        id: 12,
        title: 'Software Engineer',
        company: 'ABC Tech Solutions',
        location: 'New York, NY',
        type: 'Contract',
        postedDate: '2023-11-15',
        deadline: '2023-12-15',
      },
    ];
    setJobs(jobData);
    
  };

  useEffect(() => {
    fetchData();
  }, []);

const filteredJobs = useMemo(() => {
  if (filter === 'All') {
    return jobs;
  } else {
    return jobs.filter((job) => job.type.toLowerCase() === filter.toLowerCase());
  }
}, [jobs, filter]);
  // Pagination Logic using filteredJobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredJobs.length / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <h1>Job Listings</h1>

      <label htmlFor="jobTypeFilter">Filter by Job Type:</label>
      <select id="jobTypeFilter" value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
        {/* Add more job types as needed */}
      </select>

      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company Name</th>
            <th>Location</th>
            <th>Job Type</th>
            <th>Posted Date</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {currentJobs.map((job) => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.company}</td>
              <td>{job.location}</td>
              <td>{job.type}</td>
              <td>{job.postedDate}</td>
              <td>{job.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
      <style jsx>{`
      
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* Job Listings title */
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

/* Filter dropdown */
label {
  margin-right: 10px;
}

select {
  padding: 8px;
  font-size: 16px;
}

/* Job Listings table */
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

/* Pagination */
ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin-right: 5px;
}

button {
  padding: 5px 10px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  cursor: pointer;
}

button:hover {
  background-color: #ddd;
}

      `}</style>
    </div>
  );
};

export default Jobs;
