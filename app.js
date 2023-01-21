const jobListings = document.getElementById("job-listings");

// loop through the job data
for (let i = 0; i < jobData.length; i++) {
  const job = jobData[i];

  // create a new list item for the job
  const li = document.createElement("li");

  // create a link for the job
  const a = document.createElement("a");
  a.href = job.url;
  a.innerText = job.title;

  // append the link to the list item
  li.appendChild(a);

  // append the list item to the job listings
  jobListings.appendChild(li);
}