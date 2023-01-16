song1="";
song2="";
leftWristX = 0 ;
leftWristY = 0 ;
rightWristX = 0 ;
rightWristY = 0 ;
scoreLeftWrist = 0;
scoreRightWrist = 0;
song_name ="";


function preload(){
song1 = loadSound("music.mp3");
song2 = loadSound("music2.mp3");
}

function setup(){

    canvas = createCanvas(600,500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses);
    }





function draw(){
image(video,0,0,600,500);


fill("#FF0000");
stroke("#FF0000");

song_name = song1.isPlaying();
console.log(song_name);

if(scoreleftWrist > 0.2){
    circle(leftWristX,leftWristY,20);
    song2.stop();
    if(song_name == false){
        song1.play();
            console.log("Song Name: song1");
        document.getElementById("song_id").innerHTML = "Song Name: song1";
    }
}
}


function modelLoaded(){
    console.log('poseNet is Initialized');
}



function gotPoses(results){
    if(results.length > 0)
    {console.log(results); 
    

 scoreLeftWrist = results[0].pose.keypoints[9].score;
console.log("scoreLeftWrist = " + scoreLeftWrist + "scoreRightWrist = " + scoreRightWrist);

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX +"leftWristY = " + leftWristY );
    
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY );
    }
}
