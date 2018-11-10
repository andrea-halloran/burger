// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".Devour").on("click", function (event) {
    var id = $(this).data("id");


    var newDevoured = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevoured
    }).then(
      function () {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("New burger available");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});