function preload(){

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
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        console.log("leftEyeX = " + results[0].pose.leftEye.x);
        console.log("leftEyeY = " + results[0].pose.leftEye.y);
    }
}
function modelLoaded(){
    console.log("Loaded");
}
function TakeSnapshot(){
    save("myFilterImg.png");
}

