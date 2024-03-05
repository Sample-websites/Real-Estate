// You can use this script to dynamically update the property details
document.getElementById('property-image').src = 'home1.jpg';
document.getElementById('address').innerText = 'New Full Address';
document.getElementById('city').innerText = 'New City';
document.getElementById('state').innerText = 'New State';
document.getElementById('zip-code').innerText = 'New Zip Code';
document.getElementById('price').innerText = 'New Price';
document.getElementById('start-date').innerText = 'New Start Date';
document.getElementById('end-date').innerText = 'New End Date';
// Your existing script here

// Add event listener for the "Go Home" button
document.getElementById('go-home-btn').addEventListener('click', function() {
    // Redirect to the home page (you can replace 'home.html' with the actual page URL)
    window.location.href = 'index.html';
});
