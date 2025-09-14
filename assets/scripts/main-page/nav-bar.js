fetch('/SHARED/nav-bar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-bar-placeholder').innerHTML = data;
  });
