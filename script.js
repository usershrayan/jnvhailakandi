document.addEventListener('DOMContentLoaded', () => {

    const news = [
        { title: 'Annual Sports Day 2024', date: 'October 26, 2024', content: 'Our annual sports day was a huge success!' },
        { title: 'Science Exhibition 2024', date: 'September 15, 2024', content: 'Students showcased innovative projects...' },
        { title: 'Academic Calendar Update', date: 'September 1, 2024', content: 'The new academic calendar is now available.' }
    ];

    const events = [
        { title: 'Parent-Teacher Meeting', date: 'November 10, 2024', location: 'School Auditorium' },
        { title: 'Cultural Fest', date: 'December 5, 2024', location: 'Main Grounds' }
    ];

    const successStories = [
        { name: 'Alok Das', year: '2015 Batch', story: 'Alok is now a successful engineer at ISRO...' },
        { name: 'Priya Sharma', year: '2018 Batch', story: 'Priya is pursuing her Ph.D. at IIT Bombay...' }
    ];

    const galleryImages = [
        'https://via.placeholder.com/250/0000FF/FFFFFF?text=Photo+1',
        'https://via.placeholder.com/250/FF0000/FFFFFF?text=Photo+2',
        'https://via.placeholder.com/250/008000/FFFFFF?text=Photo+3',
        'https://via.placeholder.com/250/FFFF00/000000?text=Photo+4',
    ];

    const newsContainer = document.getElementById('news-container');
    const eventsContainer = document.getElementById('events-container');
    const successContainer = document.getElementById('success-container');
    const galleryGrid = document.querySelector('.gallery-grid');

    // Populate News
    news.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.innerHTML = `<h3>${item.title}</h3><p><em>${item.date}</em></p><p>${item.content}</p><hr>`;
        newsContainer.appendChild(newsItem);
    });

    // Populate Events
    events.forEach(item => {
        const eventItem = document.createElement('div');
        eventItem.innerHTML = `<h3>${item.title}</h3><p><strong>Date:</strong> ${item.date}</p><p><strong>Location:</strong> ${item.location}</p><hr>`;
        eventsContainer.appendChild(eventItem);
    });

    // Populate Success Stories
    successStories.forEach(item => {
        const storyItem = document.createElement('div');
        storyItem.innerHTML = `<h3>${item.name} (${item.year})</h3><p>${item.story}</p><hr>`;
        successContainer.appendChild(storyItem);
    });

    // Populate Photo Gallery
    galleryImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'School Event Photo';
        galleryGrid.appendChild(img);
    });

});
