
// Get the image element
var profileIcon = document.getElementById('profileIcon');

// Store the original source and the new source
var originalSrc = 'icons/profile-icon-white.svg';
var newSrc = 'icons/profile-icon-darkBlue.svg';

// Add event listeners for hover and mouseout
profileIcon.addEventListener('mouseover', function () {
    profileIcon.src = newSrc;
});

profileIcon.addEventListener('mouseout', function () {
    profileIcon.src = originalSrc;
});