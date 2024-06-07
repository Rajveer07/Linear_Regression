
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//variables for interation
let text = document.getElementById("text");
let itrUp = document.getElementById("itrUp")
let itrDown = document.getElementById("itrDown")

const height = canvas.height;
const width = canvas.width;

const unit = 3;

const dataset = [
    [4.5, 13.2], [15.3, 30.8], [23.7, 48.5], [34.6, 72.1], [45.9, 95.7],
    [56.2, 112.3], [67.8, 140.6], [78.1, 158.2], [89.3, 180.9], [95.6, 196.4],
    [101.4, 210.8], [112.8, 233.6], [123.5, 255.2], [134.9, 278.3], [145.2, 300.7],
    [156.1, 323.2], [167.5, 346.4], [178.4, 369.8], [189.6, 391.3], [199.8, 399.2],
    [3.1, 10.2], [13.7, 27.4], [26.4, 55.3], [36.5, 76.5], [46.8, 94.1],
    [58.9, 122.3], [69.2, 140.4], [72.3, 145.7], [81.6, 170.3], [93.5, 195.6],
    [104.2, 215.9], [117.8, 242.5], [129.5, 265.2], [132.4, 271.3], [143.6, 290.7],
    [157.8, 317.6], [160.4, 324.8], [173.5, 353.4], [184.2, 375.6], [195.1, 394.1],
    [6.3, 12.9], [16.8, 35.4], [27.4, 56.2], [39.1, 83.5], [47.9, 96.8],
    [59.3, 120.4], [65.4, 134.1], [75.8, 157.3], [85.2, 181.6], [98.1, 202.4],
    [102.5, 209.7], [113.2, 236.2], [124.8, 256.9], [133.5, 276.2], [146.1, 302.4],
    [159.7, 326.8], [162.8, 334.5], [175.4, 359.1], [183.7, 375.2], [198.5, 393.6],
    [8.2, 14.5], [18.3, 37.1], [29.4, 61.7], [41.2, 87.9], [51.5, 106.3],
    [60.4, 123.7], [68.9, 142.1], [76.5, 158.9], [87.1, 183.4], [99.2, 204.8],
    [105.4, 215.2], [118.3, 240.1], [126.4, 256.5], [138.9, 284.7], [149.3, 303.8],
    [158.7, 324.2], [169.5, 348.9], [180.6, 370.7], [191.2, 390.1], [197.4, 399.5],
    [5.3, 15.4], [14.8, 29.7], [26.1, 58.2], [35.4, 73.9], [49.2, 98.1],
    [54.1, 105.6], [63.7, 127.4], [71.8, 143.6], [83.6, 176.3], [92.1, 190.4],
    [106.4, 218.7], [110.3, 223.9], [119.5, 241.3], [130.7, 269.4], [142.5, 295.1],
    [153.8, 317.2], [160.1, 331.4], [174.5, 361.9], [181.3, 377.8], [196.2, 396.5],
    [7.4, 17.2], [17.6, 35.6], [30.3, 64.9], [38.7, 78.5], [52.3, 104.8],
    [58.4, 120.3], [66.1, 135.7], [79.2, 162.3], [88.4, 185.6], [97.5, 202.9],
    [103.2, 213.1], [116.4, 241.7], [129.8, 263.5], [133.1, 270.9], [141.6, 292.4],
    [155.4, 320.2], [167.1, 347.3], [172.3, 356.4], [184.1, 379.7], [193.6, 395.4],
    [2.4, 11.5], [12.1, 24.7], [24.5, 53.6], [31.7, 69.4], [43.6, 89.7],
    [54.3, 112.1], [63.4, 132.5], [74.5, 153.7], [86.7, 183.9], [91.8, 194.2],
    [104.1, 220.7], [109.3, 230.1], [122.6, 253.5], [136.1, 279.4], [148.3, 301.8],
    [157.4, 323.5], [166.2, 340.7], [179.7, 368.1], [187.2, 384.2], [192.5, 395.1],
    [4.8, 12.1], [14.6, 30.3], [27.3, 58.4], [33.2, 70.9], [48.4, 99.2],
    [53.5, 108.6], [66.7, 136.2], [77.1, 159.4], [82.4, 171.5], [94.7, 198.1],
    [108.3, 225.7], [114.5, 239.1], [120.8, 251.8], [135.4, 280.9], [141.2, 294.3],
    [154.7, 320.5], [163.8, 342.6], [177.5, 370.9], [186.4, 386.7], [198.1, 396.9],
    [6.7, 14.4], [19.2, 38.5], [28.9, 61.3], [40.4, 83.8], [52.8, 109.1],
    [57.5, 116.7], [69.3, 138.5], [75.2, 150.4], [87.6, 176.1], [98.2, 200.3],
    [105.6, 217.2], [113.8, 234.7], [124.2, 258.9], [139.7, 283.6], [147.9, 303.2],
    [152.8, 314.7], [166.7, 345.8], [175.9, 363.9], [182.6, 379.4], [195.4, 394.6],
    [5.9, 13.6], [16.5, 32.8], [25.7, 57.1], [38.4, 79.4], [47.3, 98.4],
    [55.8, 116.3], [62.1, 128.4], [71.4, 147.3], [83.2, 174.6], [94.6, 196.3],
    [102.3, 213.4], [115.1, 239.9], [121.9, 252.3], [133.8, 274.8], [146.7, 298.7],
    [153.6, 311.2], [164.5, 334.1], [170.8, 349.5], [183.1, 377.1], [191.4, 391.7],
    [2.3, 9.8], [12.7, 25.6], [22.9, 49.3], [34.8, 73.1], [44.5, 92.7],
    [50.1, 104.2], [64.8, 132.9], [74.6, 151.6], [81.9, 169.2], [97.8, 201.1],
    [104.9, 215.8], [112.3, 231.2], [127.5, 261.9], [137.4, 279.8], [145.3, 294.1],
    [158.6, 320.1], [168.4, 343.5], [176.5, 358.6], [181.9, 368.4], [196.8, 397.3],
    [8.7, 17.9], [18.1, 34.3], [31.9, 64.2], [42.1, 84.3], [53.7, 111.6],
    [60.8, 126.5], [68.2, 140.3], [77.5, 159.8], [89.8, 188.1], [92.5, 193.4],
    [109.4, 227.9], [119.8, 249.6], [125.6, 262.7], [134.5, 282.9], [149.2, 308.1],
    [150.3, 312.8], [165.1, 343.2], [173.6, 359.4], [185.7, 381.7], [198.4, 395.9],
    [6.9, 13.5], [15.1, 30.9], [27.2, 54.8], [36.4, 75.7], [49.1, 102.3],
    [55.9, 116.9], [68.4, 143.8], [79.9, 165.4], [84.3, 175.9], [95.7, 198.5],
    [108.6, 225.4], [111.4, 231.2], [124.9, 260.6], [139.5, 289.3], [143.1, 298.7],
    [157.9, 328.1], [163.4, 339.5], [176.7, 368.8], [182.4, 377.6], [192.1, 395.3],
    [4.4, 12.7], [17.3, 34.1], [26.7, 55.9], [38.5, 78.2], [47.8, 97.5],
    [58.7, 122.9], [69.6, 145.3], [73.4, 153.1], [89.1, 185.4], [93.2, 192.7],
    [106.2, 221.4], [115.4, 240.3], [122.4, 254.1], [138.5, 287.9], [142.1, 296.4],
    [151.9, 316.8], [167.8, 347.1], [175.6, 360.4], [184.9, 379.1], [199.7, 399.4],
    [2.5, 11.8], [13.2, 28.3], [22.6, 49.5], [34.1, 74.8], [44.3, 94.7],
    [52.5, 109.2], [66.8, 138.4], [75.1, 153.4], [87.4, 180.8], [97.2, 202.7],
    [103.8, 214.3], [110.4, 229.9], [127.9, 263.4], [137.2, 281.6], [144.6, 295.3],
    [159.6, 327.2], [169.4, 346.3], [177.1, 361.9], [181.6, 369.6], [195.8, 396.2],
    [3.7, 12.4], [18.9, 36.5], [29.6, 61.8], [41.7, 86.2], [54.6, 112.5],
    [60.7, 127.9], [67.4, 140.1], [76.8, 160.3], [90.6, 189.1], [92.1, 192.5],
    [109.2, 228.6], [118.5, 248.3], [125.9, 263.7], [134.2, 282.1], [147.8, 309.2],
    [154.1, 321.8], [164.2, 344.9], [173.4, 362.4], [186.5, 384.9], [198.2, 396.8],
    [5.1, 15.9], [14.3, 29.2], [23.9, 48.1], [31.3, 67.9], [45.7, 93.6],
    [57.6, 121.7], [63.5, 134.9], [78.9, 166.1], [85.6, 178.9], [97.1, 202.2],
    [104.3, 217.8], [111.8, 233.9], [123.9, 259.7], [136.4, 283.1], [141.3, 294.5],
    [152.1, 316.1], [167.3, 346.8], [172.5, 357.3], [181.2, 373.9], [197.5, 396.4],
    [7.6, 16.4], [18.2, 34.8], [27.1, 54.6], [39.5, 81.1], [51.4, 104.3],
    [56.3, 117.6], [67.2, 139.3], [72.9, 151.4], [86.2, 181.7], [98.4, 204.6],
    [103.4, 214.2], [119.6, 248.7], [125.7, 259.6], [137.1, 285.4], [145.7, 304.1],
    [159.2, 331.5], [168.6, 349.8], [176.9, 364.7], [185.4, 379.8], [192.8, 394.3]
];


ctx.translate(0, canvas.height);
ctx.scale(1, -1); 


function createCordinatePlane(){
    //vertical line
    ctx.beginPath();
    ctx.moveTo(0,height);
    ctx.lineTo(0,0);
    ctx.strokeStyle="black"
    ctx.stroke();
    ctx.closePath();
    //horizontal line
    ctx.beginPath();
    ctx.moveTo(width,0);
    ctx.lineTo(0,0);
    ctx.strokeStyle="black"
    ctx.stroke();
    ctx.closePath();
    //drawing hrizontal lines on vertical axis
    for(let i=0;i<height/unit;i++){
        ctx.beginPath();
        ctx.moveTo(0,i*unit);
        ctx.lineTo(4,i*unit);
        ctx.strokeStyle="black"
        ctx.stroke();
        ctx.closePath();
    }
    //drawing vertical lines on horizontal axis
    for(let i=0;i<height/unit;i++){
        ctx.beginPath();
        ctx.moveTo(i*unit,0);
        ctx.lineTo(i*unit,4);
        ctx.strokeStyle="black"
        ctx.stroke();
        ctx.closePath();
    }
}

    createCordinatePlane();

function drawDot(x, y, color) {
    ctx.beginPath();
    ctx.arc(x, y, 1, 0, Math.PI * 2, true);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}


function scatterPlot(data,color){
    let len = data.length
    for(let i=0;i<len;i++){
        drawDot(data[i][0],data[i][1],color)
    }
}

scatterPlot(dataset,"green");

let train_input = []
let train_output = []
for(let i=0;i<dataset.length;i++){
    train_input.push([dataset[i][0]]);
    train_output.push([dataset[i][1]]);
}



//Linear regresion
//Forward propagation
// Assuming dataset is already defined

for (let i = 0; i < dataset.length; i++) {
    train_input.push([dataset[i][0]]);
    train_output.push([dataset[i][1]]);
}

// Forward propagation
function forward_prop(train_input, parameters) {
    let m = parameters.m;
    let c = parameters.c;
    let predictions = [];

    for (let i = 0; i < train_input.length; i++) {
        predictions.push([train_input[i][0] * m + c]);
    }
    return predictions;
}

// Cost function
function cost_function(predictions, train_output) {
    let sum = 0;
    for (let i = 0; i < predictions.length; i++) {
        sum += Math.pow(predictions[i][0] - train_output[i][0], 2);
    }
    return sum / (2 * predictions.length);
}

// Backward propagation
function backward_propagation(train_input, train_output, predictions) {
    let df = [];
    for (let i = 0; i < predictions.length; i++) {
        df.push(predictions[i][0] - train_output[i][0]);
    }
    let dm = 0;
    let dc = 0;
    for (let i = 0; i < train_input.length; i++) {
        dm += df[i] * train_input[i][0];
        dc += df[i];
    }
    dm /= train_input.length;
    dc /= train_input.length;
    
    return { dm: dm, dc: dc };
}

// Update parameters
function updateParameters(parameters, derivatives, learningRate) {
    parameters.m -= learningRate * derivatives.dm;
    parameters.c -= learningRate * derivatives.dc;
    return parameters;
}

// Training function
function train(train_input, train_output, learningRate, iters) {
    let parameters = { m: Math.random(), c: Math.random() };
    let predictions, cost, derivatives;

    for (let i = 0; i < iters; i++) {
        predictions = forward_prop(train_input, parameters);
        cost = cost_function(predictions, train_output);
        derivatives = backward_propagation(train_input, train_output, predictions);
        parameters = updateParameters(parameters, derivatives, learningRate);
    }

    return predictions;
}

// Usage


function scatterPlot2(Xdata,Ydata,color){
    let len = dataset.length
    for(let i=0;i<len;i++){
        drawDot(Xdata[i][0],Ydata[i][0],color)
    }
}






//interaction



itrUp.addEventListener('click',()=>{
    let iteration = parseInt(text.innerText);
        iteration++;
        text.innerText = iteration;
        ctx.clearRect(0,0,width,height);
        createCordinatePlane();
        scatterPlot(dataset,"green")
        let prediction = train(train_input, train_output, 0.0001, parseInt(text.innerText));
        scatterPlot2(train_input,prediction,"red");
   
})

itrDown.addEventListener('click',()=>{
    let iteration = parseInt(text.innerText);
    if(parseInt(text.innerText)>1){
        iteration--;
        text.innerText = iteration;
        ctx.clearRect(0,0,width,height);
        createCordinatePlane();
        scatterPlot(dataset,"green")
        let prediction = train(train_input, train_output, 0.0001, parseInt(text.innerText));
        scatterPlot2(train_input,prediction,"red");
    }else{
        alert("Iteration can't be negative or zero ");
    }
})
