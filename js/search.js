// Get search input and product grid
var searchInput = document.getElementById("search-input");
var productGrid = document.getElementById("product-grid");

// Add event listener to search input
searchInput.addEventListener("input", function() {
  // Get search term
  var searchTerm = this.value.toLowerCase();

  // Loop through products
  var count = 0;
  for (var i = 0; i < productGrid.children.length; i++) {
    var product = productGrid.children[i];

    // Get product name
    var productName = product.getAttribute("data-name").toLowerCase();

    // Check if product name contains search term
    if (productName.indexOf(searchTerm) != -1) {
      // Show product
      product.style.display = "block";
    } else {
      // Hide product
      product.style.display = "none";
    }
  }
  if(count == 0){
    
  }
});