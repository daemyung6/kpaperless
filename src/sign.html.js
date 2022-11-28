export default /*html*/`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="user-scalable=no">
    <title>Document</title>
    <style>
        html, body {
            margin: 0px,
            padding: 0px,
            overflow: hidden
        }

    </style>
</head>
<body>
    
</body>
<script>
    const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 931;
canvas.height = 413;

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const ctx = canvas.getContext('2d');

ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

let mouseInfo = {
    on: false,
}

function onup(e) {
    mouseInfo.on = false;
}

function ondown(e) {
    mouseInfo.on = true;
    mouseInfo.x1 = e.targetTouches[0].pageX - e.target.offsetLeft;
    mouseInfo.y1 = e.targetTouches[0].pageY - e.target.offsetTop;
    mouseInfo.x2 = e.targetTouches[0].pageX - e.target.offsetLeft;
    mouseInfo.y2 = e.targetTouches[0].pageY - e.target.offsetTop;
    // penSoundPlay();
}
function onmove(e) {
    if (!mouseInfo.on) return;
    mouseInfo.x2 = mouseInfo.x1;
    mouseInfo.y2 = mouseInfo.y1;
    mouseInfo.x1 = e.targetTouches[0].pageX - e.target.offsetLeft;
    mouseInfo.y1 = e.targetTouches[0].pageY - e.target.offsetTop;
}
let isDraw = true;

let isRestart = false;
let restartCount = 0;

let isDrawTest = false;

function draw() {
    if (!isDraw) return;
    if (mouseInfo.on) {
        ctx.globalCompositeOperation = 'source-over';
        ctx.beginPath();
        ctx.moveTo(mouseInfo.x1, mouseInfo.y1);
        ctx.lineTo(mouseInfo.x2, mouseInfo.y2);
        ctx.stroke();
    }

    if (isDrawTest) {
        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    } 0
    setTimeout(draw, 0);
}
draw();

window.addEventListener("touchend", onup);
window.addEventListener("touchstart", ondown);
window.addEventListener("touchmove", onmove);
window.addEventListener("touchend", onup);

document.addEventListener("message", (e) => {
    if(e.data === 'clear') {
        clear();
    }
    if(e.data === 'get') {
        window.ReactNativeWebView.postMessage(
          JSON.stringify( {data: canvas.toDataURL()} )
        );
    }
})

</script>
</html>
`;