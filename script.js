// Get the like button element
var likeButton = document.getElementById("likeButton");

// Set initial like state
var isLiked = false;

// Add event listener to the button
likeButton.addEventListener("click", function() {
  if (isLiked) {
    unlike();
  } else {
    like();
  }
});

// Function to handle like action
function like() {
  // Update button appearance and text
  likeButton.classList.add("liked");
  likeButton.textContent = "Liked";

  // Update like state
  isLiked = true;
}

// Function to handle unlike action
function unlike() {
  // Update button appearance and text
  likeButton.classList.remove("liked");
  likeButton.textContent = "Like";

  // Update like state
  isLiked = false;
}
