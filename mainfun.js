//fetching topbar
fetch('layout/topbar.html')
  .then(response => response.text())
  .then(data => {
    // Inject the HTML contents into the specified element
    document.getElementById('includedContent').innerHTML = data;
  })
  .catch(error => {
    console.error('Error:', error);
  });