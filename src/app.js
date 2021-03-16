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

  document.getElementById("item-added").classList.add = "item-added";
}

// Item Detail

function itemQtyIncr() {
  var value = parseInt(document.getElementById("itemQty").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("itemQty").value = value;
}
function itemQtyDecr() {
  var value = parseInt(document.getElementById("itemQty").value, 10);
  value = isNaN(value) ? 0 : value;
  value--;
  document.getElementById("itemQty").value = value;
}
