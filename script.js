$(document).ready(
  (function() {
    console.log("hi");

    $("#img-amber").animate({ opacity: 1 }, 1500);

    $("toggle").click(function() {
      $("btn btn-primary").animate({
        height: "toggle"
      });
    });

   

   



