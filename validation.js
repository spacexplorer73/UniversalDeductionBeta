var confirm = function() {
  if (document.getElementById('pwd').value ==
    document.getElementById('cnfrmpwd').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Not Matching';
  }
}