function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    Classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/i7s8yJDW4/model.json', modelReady);

}

function modelReady()
{
    Classifier.classify(gotResults);
}

var dog=0;
var cat=0;
var lion=0;
var cow=0;

function gotResults(error, results)
{
    if(error){
        console.log(error);
    
    }else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML='I can hear- '+results[0].label;
        document.getElementById("result_confidence").innerHTML='Detected voice is of-'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

            img=document.getElementById('listen');
            
            if(results[0].label=="Barking"){
                    img.src='dog.png';
                    dog=dog+1;   
                }else if(results[0].label=="Meowing"){
                    img.src='cat.gif';
                    cat=cat+1;
                }else if(results[0].label=="Roar"){
                    img.src='lion 1.jpg';
                    lion=lion+1;
                }else{
                    img.src='cow 1.jpg';
                    cow=cow+1;
                }

    }
}