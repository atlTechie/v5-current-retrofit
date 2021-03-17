console.log("app is running");

// Toggle b/w Login-Activation and Forgot Password

document.getElementById("forgot-password-content").classList.add("hideThis");

document.getElementById("back-to-login").addEventListener("click", function () {
  //   console.log("clicked");
  document.getElementById("login-activate-content").style.display = "block";
  document.getElementById("forgot-password-content").style.display = "none";
});

document
  .getElementById("forgot-your-password")
  .addEventListener("click", function () {
    //   console.log("clicked");
    document.getElementById("login-activate-content").style.display = "none";
    document.getElementById("forgot-password-content").style.display = "block";
  });

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
