// function drawCanvas1() {
//     const canvas1 = document.getElementById("tutorial");
//   if (canvas1.getContext) {
//     const ctx = canvas1.getContext("2d");
//     ctx.fillStyle = "rgb(10)";
//     ctx.fillRect(30, 40, 20, 20);

//     ctx.fillStyle = "rgb(10)";
//     ctx.fillRect(100, 40, 20, 20);

//     ctx.fillStyle = "rgb(10)";
//     ctx.fillRect(130, 80, 20, 20);

//     ctx.fillStyle = "rgb(10)";
//     ctx.fillRect(110, 100, 20, 20);

//     ctx.fillStyle = "rgb(10)";
//     ctx.fillRect(90, 100, 20, 20);

//     ctx.fillStyle = "rgb(10)";
//     ctx.fillRect(80, 100, 20, 20);

//     ctx.fillStyle = "rgb(10)";
//     ctx.fillRect(70, 100, 20, 20);

//     ctx.fillStyle = "rgb(10)";
//     ctx.fillRect(60, 100, 20, 20);

//     ctx.fillStyle = "rgb(10)";
//     ctx.fillRect(50, 100, 20, 20);

//     ctx.fillStyle = "rgb(10)";
//     ctx.fillRect(40, 100, 20, 20);

//     ctx.fillStyle = "rgb(10)";
//     ctx.fillRect(30, 100, 20, 20);

//     ctx.fillStyle = "rgb(10)";
//     ctx.fillRect(20, 100, 20, 20);

//     ctx.fillStyle = "rgb(10)";
//     ctx.fillRect(0, 80, 20, 20);
//   }
// }

function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    // ctx.fillRect(25, 25, 100, 100);
    // ctx.clearRect(45, 45, 60, 60);
    // ctx.strokeRect(50, 50, 50, 50);

    // ctx.beginPath();
    // ctx.moveTo(75, 50);
    // ctx.lineTo(100, 75);
    // ctx.lineTo(100, 25);
    // ctx.fill();

    // ctx.beginPath();
    // ctx.moveTo(90, 90);
    // ctx.lineTo(180, 90);
    // ctx.lineTo(10, 10);
    // ctx.fill();

    // ctx.beginPath();
    // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    // ctx.moveTo(110, 75);
    // ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    // ctx.moveTo(65, 65);
    // ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    // ctx.moveTo(95, 65);
    // ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    // ctx.stroke();

    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
    // ctx.moveTo(110, 75);
    ctx.arc(50, 50, 5, 0, Math.PI * 2, true);
    ctx.moveTo(65, 10);
    ctx.stroke();
  }
}

draw();
