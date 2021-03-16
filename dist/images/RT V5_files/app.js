console.log("app is running");

/*
=======================Shopping===============================
*/

// Drilldown Menu

function openNav() {
  document.getElementById("stack-menu").style.width = "300px";
}

function closeNav() {
  document.getElementById("stack-menu").style.width = "0";
}

// Item Added toast

var itemAddedOption = {
  animation: true,
  delay: 2000,
};

function itemAddedtoCart() {
  var toastHTMLElement = document.getElementById("itemAddedToast");
  var toastElement = new bootstrap.Toast(toastHTMLElement, itemAddedOption);
  toastElement.show();
}
