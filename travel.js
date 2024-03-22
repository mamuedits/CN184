function fetchDestinations() {
    // Placeholder for fetching destinations from the backend
    const destinations = [
        { name: "Destination 1", description: "Description of Destination 1" },
        { name: "Destination 2", description: "Description of Destination 2" },
        { name: "Destination 3", description: "Description of Destination 3" },
        // Add more destinations as needed
    ];

    const destinationList = document.getElementById('destination-list');

    destinations.forEach(destination => {
        const destinationCard = document.createElement('div');
        destinationCard.classList.add('destination-card');
        destinationCard.innerHTML = `
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
        `;
        destinationList.appendChild(destinationCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchDestinations();
});