document.addEventListener("DOMContentLoaded", function () {
    // Sample property data, replace with your own data
    const properties = [
        { title: "Beautiful Home", price: "$500,000", description: "Lorem ipsum dolor sit amet.", image: "home1.jpg", page: "home.html" },
        { title: "Beautiful Home", price: "$500,000", description: "Lorem ipsum dolor sit amet.", image: "home1.jpg", page: "home.html" },
        { title: "Cozy Apartment", price: "$250,000", description: "Consectetur adipiscing elit.", image: "apartment1.jpg", page: "apartment.html" },
        { title: "Cozy Apartment", price: "$250,000", description: "Consectetur adipiscing elit.", image: "apartment1.jpg", page: "apartment.html" },
        { title: "Modern Condo", price: "$350,000", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "condo1.jpg", page: "condo.html" },
        { title: "Modern Condo", price: "$350,000", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "condo1.jpg", page: "condo.html" },
        { title: "Spacious Villa", price: "$800,000", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", image: "villa1.jpg", page: "villa.html" },
        { title: "Spacious Villa", price: "$800,000", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", image: "villa1.jpg", page: "villa.html" },
        { title: "Charming Townhouse", price: "$400,000", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", image: "townhouse1.jpg", page: "townhouse.html" },
        { title: "Charming Townhouse", price: "$400,000", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", image: "townhouse1.jpg", page: "townhouse.html" },
        // Add more properties as needed
    ];

    const listingsSection = document.getElementById("listings");

    // Display properties
    properties.forEach((property, index) => {
        const propertyElement = document.createElement("div");
        propertyElement.classList.add("property");
        propertyElement.innerHTML = `
            <img src="${property.image}" alt="${property.title}" class="property-image">
            <h2>${property.title}</h2>
            <p><strong>Price:</strong> ${property.price}</p>
            <p>${property.description}</p>
            <button onclick="redirectToPage(${index})">View Details</button>
        `;
        listingsSection.appendChild(propertyElement);
    });

    // Function to redirect to the specific property page
    window.redirectToPage = function (index) {
        const property = properties[index];
        window.location.href = property.page;
    };
});

document.getElementById('go-home-btn').addEventListener('click', function() {
    // Redirect to the home page (you can replace 'home.html' with the actual page URL)
    window.location.href = 'index.html';
});
