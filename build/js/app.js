// STICKY
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $(".sticky").addClass("nav-sticky");
  } else {
    $(".sticky").removeClass("nav-sticky");
  }
});

// SmoothLink
$(".nav-item a, .mouse-down a").on("click", function (event) {
  var $anchor = $(this);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $($anchor.attr("href")).offset().top - 0,
      },
      1500,
      "easeInOutExpo"
    );
  event.preventDefault();
});

// scrollspy
$("#navbarCollapse").scrollspy({
  offset: 70,
});

// loader
$(window).on("load", function () {
  $("#status").fadeOut();
  $("#preloader").delay(1).fadeOut("fast");
  $("body").delay(1).css({
    overflow: "visible",
  });
});

// contact

$("#contact-form").submit(function () {
  var action = $(this).attr("action");

  $("#message").slideUp(750, function () {
    $("#message").hide();

    $("#submit").before("").attr("disabled", "disabled");

    $.post(
      action,
      {
        name: $("#name").val(),
        email: $("#email").val(),
        comments: $("#comments").val(),
      },
      function (data) {
        document.getElementById("message").innerHTML = data;
        $("#message").slideDown("slow");
        $("#cform img.contact-loader").fadeOut("slow", function () {
          $(this).remove();
        });
        $("#submit").removeAttr("disabled");
        if (data.match("success") != null) $("#cform").slideUp("slow");
      }
    );
  });

  return false;
});

// Wrap every letter in a span
$(".home-8-title").each(function () {
  $(this).html(
    $(this)
      .text()
      .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
  );
});
