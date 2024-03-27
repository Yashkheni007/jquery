$(document).ready(function () {
  function addTodo() {
    var todoText = $("#todo").val();
    if (todoText !== "") {
      $("#todo-list").append(
        `<div id="sub-div"><li>` +
          todoText +
          `</li><div id="action-btn"><button id="edit-btn">Edit</button><button id="delete-btn" class="delete-btn" onclick="deleteTodo(this)">Delete</button></div></div>`
      );
      $("#todo").val("");
    } else {
      alert("Please enter a Todo value!");
    }
  }

  $("#add-btn").click(function () {
    addTodo();
  });

  $(document).on("click", "#edit-btn", function () {
    var newTodo = prompt("Edit Todo value : ");
    if (newTodo !== "") {
      $(this).closest("#sub-div").find("li").text(newTodo);
    }
  });
});

function deleteTodo(dlt) {
  $(dlt).closest("#sub-div").remove();
}
