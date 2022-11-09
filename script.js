AOS.init();

// function run() {
// 	var canvas = document.getElementById("mycanvas");
// 	var ctx = canvas.getContext("2d");

// 	ctx.font = "30px Arial";
// 	ctx.fillStyle = "blue";
// 	ctx.fillText("PRODUCER", 10, 50);

// 	ctx.fillStyle = "red";
// 	ctx.fillText("CONSUMER", 600, 350);

// 	ctx.fillStyle = "black";
// 	ctx.fillRect(canvas.width / 2 - 220, canvas.height / 2 - 100, 400, 200);

// 	ctx.font = "30px Arial";
// 	ctx.fillStyle = "red";
// 	ctx.fillText("BUFFER", 320, 280);

// 	let buffer_size = 6;
// 	let xpos = 100;
// 	let buff_cnt = 0;
// 	let speed = 1000;

// 	let insert_buffer = setInterval(() => {
// 		buff_cnt++;
// 		if (buff_cnt === buffer_size) {
// 			clearInterval(insert_buffer);
// 		}
// 		ctx.fillRect(canvas.width / 2 + xpos, canvas.height / 2 - 60, 50, 80);
// 		xpos -= 60;
// 	}, speed);
// 	ctx.stroke();
// }
// run();
