const task3Element = document.getElementById("task-3");

function fun1() {
  alert("Hello");
}

function fun2(name) {
  alert(name);
}

fun2("Davo");

task3Element.addEventListener("click", function () {
  fun1();
});

function threeStrings(s1, s2, s3) {
  return s1 + " " + s2 + " " + s3;
}

alert(threeStrings("hola", "mundo", "js"));
