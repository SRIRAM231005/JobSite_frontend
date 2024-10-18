// Dummy Job Data
const jobs = [
    { title: 'Software Engineer', company: 'Google', location: 'New York', image: 'https://www.jpmorganchase.com/content/dam/jpmorganchase/images/communities/new-york-city/nyc-street-view.jpg', type: 'Full-time', description: 'Develop and maintain software solutions.' },
    { title: 'Data Scientist', company: 'Facebook', location: 'San Francisco', image: 'https://cdn.sanity.io/images/xeonec4d/production/79d785861fcb12eaf779d98239dea1cd2c41c092-512x320.jpg?w=780', type: 'Full-time', description: 'Analyze data and provide business insights.' },
    { title: 'Web Developer', company: 'Amazon', location: 'New York', image: 'https://www.jpmorganchase.com/content/dam/jpmorganchase/images/communities/new-york-city/nyc-street-view.jpg', type: 'Part-time', description: 'Build and maintain web applications.' },
    { title: 'Data Scientist', company: 'Facebook', location: 'San Francisco', image: 'https://images.squarespace-cdn.com/content/v1/5b5662efda02bca57a0cfe18/1595987707520-VCKDAIGTTR5C7PZH9G5E/%C2%A9Wakely_620207.jpg?format=2500w', type: 'Full-time', description: 'Analyze data and provide business insights.' },
    { title: 'Software Engineer', company: 'Microsoft', location: 'Seattle', image: 'https://www.home-designing.com/wp-content/uploads/2012/07/Microsoft-Seattle-Studio.jpg', type: 'Full-time', description: 'Analyze data and provide business insights.' },
    { title: 'Data Scientist', company: 'Microsoft', location: 'Seattle', image: 'https://img.us.news.samsung.com/us/wp-content/uploads/2020/01/23151704/Griffith_SAM_0561.jpg', type: 'Full-time', description: 'Analyze data and provide business insights.' },
    { title: 'Web Developer', company: 'Microsoft', location: 'San Francisco', image: 'https://images.wsj.net/im-441453/M', type: 'Full-time', description: 'Analyze data and provide business insights.' },
    { title: 'Software Engineer', company: 'Twitter', location: 'New York', image: 'https://wpassets.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2022/11/24024036/Twitter-Singapore-staff-relaxing-laughing.jpg', type: 'Full-time', description: 'Analyze data and provide business insights.' },
    { title: 'Software Engineer', company: 'Visa', location: 'Seattle', image: 'https://musedesignawards.com/upload/entry/files/ME212303/small/34481670422606.jpg', type: 'Full-time', description: 'Analyze data and provide business insights.' },
    { title: 'Data Scientist', company: 'Microsoft', location: 'New York', image: 'https://www.home-designing.com/wp-content/uploads/2012/07/Microsoft-Seattle-Studio.jpg', type: 'Full-time', description: 'Analyze data and provide business insights.' },
    { title: 'Web Developer', company: 'Microsoft', location: 'Seattle', image: 'https://www.home-designing.com/wp-content/uploads/2012/07/Microsoft-Seattle-Studio.jpg', type: 'Full-time', description: 'Analyze data and provide business insights.' },
    { title: 'Web Developer', company: 'Microsoft', location: 'San Francisco', image: 'https://www.home-designing.com/wp-content/uploads/2012/07/Microsoft-Seattle-Studio.jpg', type: 'Full-time', description: 'Analyze data and provide business insights.' }
];

// Function to Display Jobs
function displayJobs() {
    const jobList = document.querySelector('.job-list');
    jobList.innerHTML = '';
    jobs.forEach((job, index) => {
        const jobItem = document.createElement('div');
        jobItem.classList.add('job-item');
        jobItem.innerHTML = `
            <img src="${job.image}" style="height:150px;">
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>${job.location}</p>
        `;
        jobItem.onclick = () => openModal(index);
        jobList.appendChild(jobItem);
    });
}


// Function to Display Jobs
function displayJobs1(filteredJobs) {
    const jobList = document.querySelector('.job-list');
    jobList.innerHTML = '';
    filteredJobs.forEach((job, index1) => {
        const jobItem = document.createElement('div');
        jobItem.classList.add('job-item');
        jobItem.setAttribute('data-location', job.location);
        jobItem.setAttribute('data-type', job.type);
        jobItem.innerHTML = `
            <img src="${job.image}" style="height:150px; width:100%; object-fit:cover; border-radius:5px;">
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>${job.location}</p>
        `;
        let index;
        for(let i=0 ; i<jobs.length; i++){
            if(job.location === jobs[i].location && job.type === jobs[i].type){
                index = i;
            }
        }
        jobItem.onclick = () => openModal1(index1);
        jobList.appendChild(jobItem);
    });
}


// Function to Filter Jobs
let filteredJobs = [];
function filterJobs() {
    const locationFilter = document.querySelector('#location-filter').value;
    const typeFilter = document.querySelector('#type-filter').value;

    filteredJobs = jobs.filter(job => {
        const locationMatches = locationFilter === '' || job.location === locationFilter;
        const typeMatches = typeFilter === '' || job.type === typeFilter;
        return locationMatches && typeMatches;
    });

    displayJobs1(filteredJobs);
}


// Function to Open Job Details Modal
function openModal(index) {
    const modal = document.getElementById('jobDetailsModal');
    modal.style.display = 'flex';
    const job = jobs[index];
    console.log(index);
    document.getElementById('job-title').textContent = job.title;
    document.getElementById('job-company').textContent = `Company: ${job.company}`;
    document.getElementById('job-location').textContent = `Location: ${job.location}`;
    document.getElementById('job-description').textContent = job.description;
}

function openModal1(index) {
    const modal = document.getElementById('jobDetailsModal');
    modal.style.display = 'flex';
    const job = filterJobs[index];
    console.log(index);
    document.getElementById('job-title').textContent = job.title;
    document.getElementById('job-company').textContent = `Company: ${job.company}`;
    document.getElementById('job-location').textContent = `Location: ${job.location}`;
    document.getElementById('job-description').textContent = job.description;
}

// Function to Close Job Details Modal
function closeModal() {
    const modal = document.getElementById('jobDetailsModal');
    modal.style.display = 'none';
}

// Function to Apply for Job
function applyForJob() {
    alert('Application submitted!');
}

// Initialize Job List on Page Load
document.addEventListener('DOMContentLoaded', displayJobs);
