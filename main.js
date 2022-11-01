prediction_1=""
prediction_2=""
Webcam.set({
    height:350,
    width:350,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6wxVNNjNa/model.json',modelLoaded);
function modelLoaded(){
    console.log("model is  loaded ");
}
function speak(){
    var synth=window.SpeechSynthesis;
    speakData1="the first prediction is "+prediction_1;
    speakData2="the second prediction is "+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speakData1+speakData2);
    synth.speak(utterThis);
}