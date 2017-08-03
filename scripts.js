$(document).ready(function() {
  $(".nbb").click(function() {
    $(".nbb").parent().removeClass("active");
    $(this).parent().addClass("active");
  })
    })