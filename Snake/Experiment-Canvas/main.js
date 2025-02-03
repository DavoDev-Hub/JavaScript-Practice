const canvas = document.getElementById("tutorial");

function draw() {
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(10)";
    ctx.fillRect(30, 40, 20, 20);

    ctx.fillStyle = "rgb(10)";
    ctx.fillRect(100, 40, 20, 20);

    ctx.fillStyle = "rgb(10)";
    ctx.fillRect(130, 80, 20, 20);

    ctx.fillStyle = "rgb(10)";
    ctx.fillRect(110, 100, 20, 20);

    ctx.fillStyle = "rgb(10)";
    ctx.fillRect(90, 100, 20, 20);

    ctx.fillStyle = "rgb(10)";
    ctx.fillRect(80, 100, 20, 20);

    ctx.fillStyle = "rgb(10)";
    ctx.fillRect(70, 100, 20, 20);

    ctx.fillStyle = "rgb(10)";
    ctx.fillRect(60, 100, 20, 20);

    ctx.fillStyle = "rgb(10)";
    ctx.fillRect(50, 100, 20, 20);

    ctx.fillStyle = "rgb(10)";
    ctx.fillRect(40, 100, 20, 20);

    ctx.fillStyle = "rgb(10)";
    ctx.fillRect(30, 100, 20, 20);

    ctx.fillStyle = "rgb(10)";
    ctx.fillRect(20, 100, 20, 20);

    ctx.fillStyle = "rgb(10)";
    ctx.fillRect(0, 80, 20, 20);
  }
}
draw();
