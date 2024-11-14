
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

// Function to add a new task
btn.addEventListener("click", function () {
  let task = inp.value.trim(); // Get the input value and remove leading/trailing spaces
  if (task !== "") { // Only add task if the input is not empty
    let li = document.createElement("li"); // Create a new list item
    li.textContent = task; // Set the text content to the task
    
    // Create a delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    
    // Add event listener to the delete button
    deleteBtn.addEventListener("click", function () {
      ul.removeChild(li); // Remove the task from the list when clicked
    });
    
    // Append the delete button to the list item
    li.appendChild(deleteBtn);
    
    // Append the new list item to the unordered list
    ul.appendChild(li);

    inp.value = ""; // Clear the input box after adding the task
  } else {
    alert("Please enter a task!"); // Alert if input is empty
  }
});

// Optional: You can also allow users to press Enter to add a task
inp.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    btn.click();
  }
});
