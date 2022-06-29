 function startClassificatian(){
     navagator.mediaDevices.getUserMedia({ audio: true});
     classifier = mlk.soundClassifer('//https://teachablemachine.withgoogle.com/models/xdRlWDaPT/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}