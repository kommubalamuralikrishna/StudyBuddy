function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim().toLowerCase();

  if (taskText === "") {
    alert("Please enter a topic.");
    return;
  }

  const links = {
    dsa: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
    dbms: "https://www.geeksforgeeks.org/dbms/dbms/",
    oops: "https://www.w3schools.com/cpp/cpp_oop.asp"
  };

  if (links[taskText]) {
    alert("Buddy, I found it!");
    window.open(links[taskText], "_blank");
  } else {
    alert("Sorry Buddy, ask any other.");
  }

  input.value = "";
}
