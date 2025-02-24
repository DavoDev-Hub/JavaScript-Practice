const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const ulElim = document.getElementById("ulElim");

button.addEventListener("click", function () {
  const li = document.createElement("li");
  const buttonElim = document.createElement("button");
  buttonElim.style.backgroundColor = "red";
  buttonElim.textContent = "🗑️";
  li.textContent = input.value;
  ul.appendChild(li);
  li.appendChild(buttonElim);

  buttonElim.addEventListener("click", function () {
    let liRemoved = document.createElement("li");
    liRemoved.textContent = li.textContent;
    ulElim.appendChild(liRemoved);
    li.remove();
  });

  input = "";
});
