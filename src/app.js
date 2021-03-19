console.log("app is running");

$.get("../src/data/navigation.json", function (data) {
  // console.log(data);
  const navWrap = document.getElementById("hdr-nav");
  const ftrNavWrap = document.getElementById("ftr-nav");
  navWrap.innerHTML = "";
  ftrNavWrap.innerHTML = "";

  if (navWrap && ftrNavWrap) {
    for (i = 0; i < data.nav.length; i++) {
      // console.log(data.nav[i].name);

      if (data.nav[i].inNav) {
        if (data.nav[i].location == "header") {
          navWrap.innerHTML += `
      <li class="nav-item"><a class="nav-link" aria-current="page" href="./${data.nav[i].path}.html">${data.nav[i].name}</a></li>
      `;
        } else {
          ftrNavWrap.innerHTML += `<li class="nav-item"><a class="nav-link" aria-current="page" href="./${data.nav[i].path}.html">${data.nav[i].name}</a></li>`;
        }
      }
    }
  }

  // console.log(data);
});

// Leaderboard
$.get("../src/data/leaderboard.json", function (ldr) {
  console.log(ldr);
  for (i = 0; i < ldr.leaders.length; i++) {
    console.log(ldr.leaders[i].region);
  }
});

// Toggle b/w Login-Activation and Forgot Password

const login = document.getElementById("forgot-password-content");
login.classList.add("hideThis");

if (login) {
  document
    .getElementById("back-to-login")
    .addEventListener("click", function () {
      //   console.log("clicked");
      document.getElementById("login-activate-content").style.display = "block";
      document.getElementById("forgot-password-content").style.display = "none";
    });

  document
    .getElementById("forgot-your-password")
    .addEventListener("click", function () {
      //   console.log("clicked");
      document.getElementById("login-activate-content").style.display = "none";
      document.getElementById("forgot-password-content").style.display =
        "block";
    });
}

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
