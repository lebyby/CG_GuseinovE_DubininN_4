let canv = document.getElementById("canvas");
let ctx = canv.getContext('2d');
canv.width = 1000;
canv.height = 650;


let addBut = document.getElementById("addButton");
let deleteBut = document.getElementById("deleteButton");

let count = 4;
let arrPoint = [];
arrWindow = [];

randomSegments();
draw();

function addPoint(){

    let newArrWindow = [];

    if(count < 6){

        count++;

        let table = document.getElementById("table");
        let newPointInput = ('<td><span>' + count + '</span></td>');
        newPointInput += '<td><input type="number"  class="input_number" name="" id="x' + count + 'Text" min="0" max="1000" value="0" onchange="draw(arrPoint)"></td>';
        newPointInput += '<td><input type="number"  class="input_number" name="" id="y' + count + 'Text" min="0" max="1000" value="0" onchange="draw(arrPoint)"></td>';
        newPointInput += '<th>&nbsp;</th>';
        table.insertAdjacentHTML('beforeend', newPointInput);

        for(let i = 0; i < count; i++){

            let ptr = document.getElementById("x" + (i + 1) + "Text").value;
            let ptr1 = document.getElementById("y" + (i + 1) + "Text").value;
            newArrWindow.push([ptr, ptr1]);
        }

        arrWindow = newArrWindow;

    }
    else{
        alert("Максимальное количество точек: 6");
    }

}

function deletePoint(){

    let newArrWindow = [];

    if(count > 3){
        let trItems = document.getElementById("table").getElementsByTagName("tr");
        trItems[trItems.length-1].remove();
        count--;
    }
    else{
        alert("Минимальное количество точек: 3");
    }

    for(let i = 0; i < count; i++){

        let ptr = document.getElementById("x" + (i + 1) + "Text").value;
        let ptr1 = document.getElementById("y" + (i + 1) + "Text").value;
        newArrWindow.push([ptr, ptr1]);
    }

    arrWindow = newArrWindow;

}

function randomSegments(){

    let num = getRandomInt(3, 8);

    let newArrPoint = [];

    for(let i = 0; i < num; i++){
        let x = getRandomInt(10, 1000);
        let y = getRandomInt(10, 640);
        let x1 = getRandomInt(10, 1000);
        let y1 = getRandomInt(10, 640);

        let newPointX = [x, x1];
        let newPointY = [y, y1];

        newArrPoint.push([newPointX, newPointY]);
    }

    arrPoint = newArrPoint;
}

function draw() {

    ctx.clearRect(0, 0, canv.width, canv.height);

    let newArrWindow = [];

    for (let i = 0; i < count; i++) {

        let ptr = document.getElementById("x" + (i + 1) + "Text").value;
        let ptr1 = document.getElementById("y" + (i + 1) + "Text").value;
        newArrWindow.push([ptr, ptr1]);
    }

    arrWindow = newArrWindow;


    ctx.strokeStyle = 'rgb(2, 171, 250)';
    ctx.lineWidth = 3;
    for (let i = 0; i < count - 1; i++) {

        ctx.beginPath();
        ctx.moveTo(arrWindow[i][0], 650-arrWindow[i][1]);

        ctx.lineTo(arrWindow[i + 1][0], 650-arrWindow[i + 1][1]);
        ctx.stroke();
        ctx.closePath();
    }

    ctx.beginPath();
    ctx.moveTo(arrWindow[arrWindow.length - 1][0], 650-arrWindow[arrWindow.length - 1][1]);
    ctx.lineTo(arrWindow[0][0], 650-arrWindow[0][1]);
    ctx.stroke();
    ctx.closePath();

    if (count === 3) {
        ctx.fillStyle = 'rgba(2, 171, 250, 0.1)';

        ctx.beginPath();
        ctx.moveTo(arrWindow[0][0], 650-arrWindow[0][1]);
        ctx.lineTo(arrWindow[1][0], 650-arrWindow[1][1]);
        ctx.lineTo(arrWindow[2][0], 650-arrWindow[2][1]);
        ctx.fill();
        ctx.closePath();
    } else {
        if (count === 4) {
            ctx.fillStyle = 'rgba(2, 171, 250, 0.1)';

            ctx.beginPath();
            ctx.moveTo(arrWindow[0][0], 650-arrWindow[0][1]);
            ctx.lineTo(arrWindow[1][0], 650-arrWindow[1][1]);
            ctx.lineTo(arrWindow[2][0], 650-arrWindow[2][1]);
            ctx.lineTo(arrWindow[3][0], 650-arrWindow[3][1]);
            ctx.fill();
            ctx.closePath();
        } else {
            if (count === 5) {
                ctx.fillStyle = 'rgba(2, 171, 250, 0.1)';

                ctx.beginPath();
                ctx.moveTo(arrWindow[0][0], 650-arrWindow[0][1]);
                ctx.lineTo(arrWindow[1][0], 650-arrWindow[1][1]);
                ctx.lineTo(arrWindow[2][0], 650-arrWindow[2][1]);
                ctx.lineTo(arrWindow[3][0], 650-arrWindow[3][1]);
                ctx.lineTo(arrWindow[4][0], 650-arrWindow[4][1]);
                ctx.fill();
                ctx.closePath();
            } else {
                if (count === 6) {
                    ctx.fillStyle = 'rgba(2, 171, 250, 0.1)';

                    ctx.beginPath();
                    ctx.moveTo(arrWindow[0][0], 650-arrWindow[0][1]);
                    ctx.lineTo(arrWindow[1][0], 650-arrWindow[1][1]);
                    ctx.lineTo(arrWindow[2][0], 650-arrWindow[2][1]);
                    ctx.lineTo(arrWindow[3][0], 650-arrWindow[3][1]);
                    ctx.lineTo(arrWindow[4][0], 650-arrWindow[4][1]);
                    ctx.lineTo(arrWindow[5][0], 650-arrWindow[5][1]);
                    ctx.fill();
                    ctx.closePath();
                } else {
                    if (count === 7) {
                        ctx.fillStyle = 'rgba(2, 171, 250, 0.1)';

                        ctx.beginPath();
                        ctx.moveTo(arrWindow[0][0], 650-arrWindow[0][1]);
                        ctx.lineTo(arrWindow[1][0], 650-arrWindow[1][1]);
                        ctx.lineTo(arrWindow[2][0], 650-arrWindow[2][1]);
                        ctx.lineTo(arrWindow[3][0], 650-arrWindow[3][1]);
                        ctx.lineTo(arrWindow[4][0], 650-arrWindow[4][1]);
                        ctx.lineTo(arrWindow[5][0], 650-arrWindow[5][1]);
                        ctx.lineTo(arrWindow[6][0], 650-arrWindow[6][1]);
                        ctx.fill();
                        ctx.closePath();
                    }
                }
            }
        }
    }

    ctx.strokeStyle = 'rgb(115,22,221)';
    ctx.lineWidth = 3;

    for (let i = 0; i < arrPoint.length; i++) {

        if (LineCrossWindow(arrWindow, arrPoint[i])) {
            ctx.strokeStyle = 'rgb(197,219,9)';
            ctx.lineWidth = 3;
        }

        if (LineInsideWindow(arrWindow, arrPoint[i])) {
            ctx.setLineDash([15, 3]);
            ctx.strokeStyle = 'rgb(22,102,3)';
            ctx.lineWidth = 3;
        }
        ctx.beginPath();
        ctx.moveTo(arrPoint[i][0][0], 650-arrPoint[i][0][1]);
        ctx.lineTo(arrPoint[i][1][0], 650-arrPoint[i][1][1]);
        ctx.stroke();
        ctx.closePath();

        ctx.strokeStyle = 'rgb(115,22,221)';
        ctx.setLineDash([0, 0]);
        ctx.lineWidth = 3;

    }
    legend();

}

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function rotate(A, B, C){
    return (B[0]-A[0])*(C[1]-B[1])-(B[1]-A[1])*(C[0]-B[0]);
}

function intersect(A,B,C,D){
    return ( (rotate(A,B,C) * rotate(A,B,D) <= 0) & (rotate(C,D,A) * rotate(C,D,B) < 0) );
}

function pointloc(P,A){
    n = P.length;
    return !(rotate(P[0], P[1], A) < 0 || rotate(P[0], P[n - 1], A) > 0);
}

function isPointWindow(P, A){
    if (pointloc(P,A)){
        let p = 1;
        let r = P.length;
        while(r - p > 1){
            q = Math.round((p + r)/2);
            if (rotate(P[0], P[q], A) < 0){
                r = q;
            }else{
                p = q;
            }
        }
        return !intersect(P[0],A,P[p],P[r]);
    }else{
        return false;
    }
}

function LineCrossWindow(P, A){
    let x = isPointWindow(P, A[0]);
    let y = isPointWindow(P, A[1]);
    let boolean = false;
    for (let i = 0; i < P.length - 1; i++){
        if (intersect(A[0], A[1], P[i], P[i+1])){
            boolean = true;
        }
    }
    return x & !y | !x & y | boolean;
}

function LineInsideWindow(P, A){
    let x = isPointWindow(P, A[0]);
    let y = isPointWindow(P, A[1]);
    let boolean = false;
    for (let i = 0; i < P.length - 1; i++){
        if (intersect(A[0], A[1], P[i], P[i+1])){
            boolean = true;
        }
    }
    return  x & y;
}

function legend() {
    ctx.fillStyle = 'rgba(208,208,208,0.7)';

    ctx.beginPath();
    ctx.moveTo(1000, 0);
    ctx.lineTo(1000, 100);
    ctx.lineTo(650, 100);
    ctx.lineTo(650, 0);
    ctx.lineTo(1000, 0);

    ctx.fill();
    ctx.closePath();

    ctx.strokeStyle = 'rgb(62,62,62)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(1000, 0);
    ctx.lineTo(1000, 100);
    ctx.lineTo(650, 100);
    ctx.lineTo(650, 0);
    ctx.lineTo(1000, 0);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.font = "15px JetBrainsMono Regular";
    ctx.fillStyle="#000000";
    ctx.fillText("- область выпуклого окна", 720, 20);
    ctx.fillText("- полностью попадает в область", 720, 40);
    ctx.fillText("- частично попадает в область", 720, 60);
    ctx.fillText("- не попадает в область", 720, 80);
    ctx.stroke();
    ctx.closePath();

    ctx.strokeStyle = 'rgb(2, 171, 250)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(660, 7);
    ctx.lineTo(710, 7);
    ctx.lineTo(710, 20);
    ctx.lineTo(660, 20);
    ctx.lineTo(660, 7);
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = 'rgba(2, 171, 250, 0.1)';
    ctx.beginPath();
    ctx.moveTo(660, 7);
    ctx.lineTo(710, 7);
    ctx.lineTo(710, 20);
    ctx.lineTo(660, 20);
    ctx.lineTo(660, 7);
    ctx.fill();
    ctx.closePath();
    ctx.strokeStyle = 'rgb(115,22,221)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(660, 75);
    ctx.lineTo(710, 75);
    ctx.stroke();
    ctx.closePath();

    ctx.strokeStyle = 'rgb(197,219,9)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(660, 55);
    ctx.lineTo(710, 55);
    ctx.stroke();
    ctx.closePath();

    ctx.strokeStyle = 'rgb(22,102,3)';
    ctx.setLineDash([15, 3]);
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(660, 35);
    ctx.lineTo(710, 35);
    ctx.stroke();
    ctx.closePath();
    ctx.setLineDash([0, 0]);

}