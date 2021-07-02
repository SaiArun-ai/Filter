function preload(){
    clown_nose = loadImage("https://i.postimg.cc/T2zw42fW/Clown-Nose-image2.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(440,400);
    video.hide();
    //Posenet
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,440,400);
    //fill(220,100,90);
    //noStroke();
    //circle(noseX,noseY,30);
    image(clown_nose,leftEyeX - 30,leftEyeY - 30,100,100);
}
var noseX ; 
var noseY ;
var leftEyeX ;
var leftEyeY ;  
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX =  results[0].pose.nose.x;
        noseY =  results[0].pose.nose.y;
        leftEyeX = results[0].pose.rightEye.x;
        leftEyeY = results[0].pose.rightEye.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        console.log("leftEyeX = " + leftEyeX);
        console.log("leftEyeY = " + leftEyeY);
    }
}
function modelLoaded(){
    console.log("Loaded");
}
function TakeSnapshot(){
    save("myFilterImg.png");
}

