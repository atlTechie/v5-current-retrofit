console.log("app is running");

// Bring in Navigation
// $.ajax({
//   url:
//     "https://spreadsheets.google.com/feeds/list/1_BxF8Z3byKpkaYEHLfRkOyCe6n87JGqsmZbpiTOCw8A/od6/public/basic?alt=json",
//   type: "GET",
//   dataType: "json",
//   header: true,
//   success: function (res) {
//     // console.log(res.feed.entry);
//     for (i = 0; i < res.feed.entry.length; i++) {
//       //   console.log(res.feed.entry[i]);
//       var navs = res.feed.entry[i].content.$t;
//       console.log(typeof navs);

//       console.log(navs);
//     }
//   },
// });

// Activate shopping drilldown
// function deptDropdown() {
//   const stackBtntoggle = document.getElementById("stack-menu-toggle");
//   const stackMenu = document.getElementById("stack-menu");
//   stackBtntoggle.addEventListener("click", function () {
//     if (stackMenu.style.left === "-20vw") {
//       stackMenu.style.left = 0;
//     } else {
//       stackMenu.style.left = "-20vw";
//     }
//   });
// }

// $(document).ready(function () {
//   $("#stack-menu-toggle").click(function () {
//     $("nav#stack-menu").style.width = "250px";
//   });
// });

function openNav() {
  document.getElementById("stack-menu").style.width = "300px";
}

function closeNav() {
  document.getElementById("stack-menu").style.width = "0";
}
