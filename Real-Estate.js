document.addEventListener("DOMContentLoaded", function () {
    // Sample property data, replace with your own data
    const properties = [
        { title: "Beautiful Home", price: "$500,000", description: "Lorem ipsum dolor sit amet.", image: "home1.jpg", page: "home.html" },
        { title: "Cozy Apartment", price: "$250,000", description: "Consectetur adipiscing elit.", image: "apartment1.jpg", page: "apartment.html" },
        { title: "Modern Condo", price: "$350,000", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "condo1.jpg", page: "condo.html" },
        { title: "Spacious Villa", price: "$800,000", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", image: "villa1.jpg", page: "villa.html" },
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
            <button onclick="redirectToPage(${index})" class="view-details">View Details</button>
        `;
        listingsSection.appendChild(propertyElement);
    });

    // Function to redirect to the specific property page
    window.redirectToPage = function (index) {
        const property = properties[index];
        window.location.href = property.page;
    };
});

document.getElementById('hamburgerIcon').addEventListener('click', function () {
  var navLinks = document.querySelector('nav ul');
  navLinks.style.display = (navLinks.style.display === 'none' || navLinks.style.display === '') ? 'flex' : 'none';
});

        function displayReview() {
            var email = document.getElementById('remail').value;
            var review = document.getElementById('review').value;
            var outputDiv = document.getElementById('output');

            // Save the review to local storag
   

            // Display the review with improved styling
            if (email === '' || review ==='') {
             alert('Please insert proper value');
            }
            else {
            outputDiv.innerHTML += `
                <div class="review">
                    <strong>Email:</strong> ${email}<br>
                    <strong>Review:</strong> ${review}
                </div>
            `;
            

            // Clear input fields
            document.getElementById('remail').value = '';
            document.getElementById('review').value = '';
            }
        }

        /*function saveReview(email, review) {
            var existingReviews = JSON.parse(localStorage.getItem('reviews')) || [];
            existingReviews.push({ email: email, review: review });
            localStorage.setItem('reviews', JSON.stringify(existingReviews));
        }

        function displayStoredReviews() {
            var outputDiv = document.getElementById('output');
            var storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];

            storedReviews.forEach(function (item) {
                outputDiv.innerHTML += `
                    <div class="review">
                        <strong>Email:</strong> ${item.email}<br>
                        <strong>Review:</strong> ${item.review}
                    </div>
                `;
            });
        
        }
        function eraseReviews() {
            // Clear reviews from local storage and reload the page
            localStorage.removeItem('reviews');
            location.reload();
        }
        function toggleNav() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}
*/

        
        // Your existing JavaScript code
// Your existing JavaScript code

document.addEventListener("DOMContentLoaded", function () {
    // Sample property data with random images and numbers
    const listingsSection = document.getElementById("categories");

    for (let i = 1; i <= 5; i++) {
        const propertyElement = document.createElement("div");
        propertyElement.classList.add("property");
        propertyElement.innerHTML = `
            <a href="property${i}.html">
                <img src="${getRandomImageName()}" alt="Random Property ${i}">
                <div class="overlay">
                    <h2>Listing #${i}</h2>
                    <p>Price: $${Math.floor(Math.random() * 900000) + 100000}</p>
                </div>
            </a>
        `;
        listingsSection.appendChild(propertyElement);
    }
});
