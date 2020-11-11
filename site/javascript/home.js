const toggle = $(".hamburger");
const closeToggle = $(".toggle-close");
const sideBar = $(".sidebar");
let isSideBarOpen = false;
let url = "data/data.json";

$(document).ready(function() {
  toggle.click(clickToggle);
  closeToggle.click(closeSidebar);
  $(".sec").click(function(param) {
    if (isSideBarOpen) {
      closeSidebar();
    }
  });
});

$.ajax({
  url: "data/data.json",
  method: "GET",
  dataType: "json"
}).done(displayData);

function displayData(data) {
  $.each(data, display);
  $(".dropdown").click(function name(params) {
    $(this)
      .children(2)
      .fadeIn();
    $(".dropdown-content").fadeOut(3000);
  });
}
$("body").click(function(e) {
  if ($(e.target).attr("class") !== "dropdown") {
    // $('.dropdown-content').fadeOut(800) ;
  }
});

function display(index, dataSet) {
  $(".section-container").append(`<article class="product">
                    <div class="title-product"> <a href=""> ${dataSet.name} </a>
                        
                    </div>

                    <div class="img-container">
                        <img src="${dataSet.img}" alt="galaxy" height="200" width="180" >
                    </div>
                    <div class="basic-info">
                        <p class="price-product">${dataSet.price} <span>DA</span></p>  
                        <p class="place-product">${dataSet.wilaya} <span><span></p>
                    </div>
                    <p class="descreption-product">${dataSet.descreption}</p>
                    <div class="dropdown">
                            <p class="dropbtn">•••</p>
                            <div class="dropdown-content">
                                <a href="#">Add to bag</a>
                                <a href="#">Not interrest</a>
                                <a href="#">Report</a>
                            </div>
                        </div>
                </article>`);
}

function clickToggle() {
  isSideBarOpen = true;
  sideBar.addClass("hide-side-bar");
}

function closeSidebar() {
  isSideBarOpen = false;
  sideBar.removeClass("hide-side-bar");
}
