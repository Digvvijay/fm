lwx=0;
rwx=0;
difference=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw()
{
    fs=difference/2.5;
    document.getElementById("name").style.fontSize=fs;
}

function modelLoaded()
{
    console.log('posenet is initialised');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        lwx=results[0].pose.leftWrist.x;
        rwx=results[0].pose.rightWrist.x;
        difference=lwx-rwx;
    }
}