$(".navbar a").click(function() {
  $("body,html").animate(
    {
      scrollTop: $("#" + $(this).data("value")).offset().top
    },
    1000
  );
});

function jumpToContact() {
  var element = document.getElementById("contact");
  element.scrollIntoView();
}
