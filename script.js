//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll('.square');

    // Function to change the background color of squares
    function changeColors(currentSquare) {
        squares.forEach(square => {
            if (square !== currentSquare) {
                square.style.backgroundColor = '#6F4E37'; // Coffee color
            }
        });
    }

    // Add event listeners to each square
    squares.forEach(square => {
        square.addEventListener('mouseenter', function () {
            changeColors(this); // Change colors when cursor enters the square
        });

        square.addEventListener('mouseleave', function () {
            // Restore original color when cursor leaves the square
            squares.forEach(square => {
                square.style.backgroundColor = '#E6E6FA'; // Lavender color
            });
        });
    });
});

