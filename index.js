function start(){
    recul=0;
    var pos = 0;
    var euro = 0;
    var box = document.getElementById('box');
    var t = setInterval(move,5);

    function move(){
        if(pos >= 150, euro >=100){
            document.getElementById('coin').style.display = 'none';
            document.getElementById('cloud').style.display ='block';
            document.getElementById('message').innerHTML = 'Vous avez ' + euro +' euro';
            
            }
            if(pos >= 300, euro >= 200){
            document.getElementById('coin2').style.display = 'none';
            document.getElementById('cloud2').style.display = 'block';
            document.getElementById('message').innerHTML = 'Vous avez ' + euro +' euro';
            }
            if(pos >= 450){
             
            document.getElementById('coin3').style.display = 'none'; 
            document.getElementById('cloud3').style.display= 'block';
            }
            if(pos === 450){
                document.getElementById('wario3').style.display="block";
                document.getElementById('mario').style.display="none";
                clearInterval(t);
                
            } 
        else{
            pos += 1;
            euro +=1;
            box.style.left = pos+'px';
        }
    }
    document.getElementById('message').style.display = 'block';
};




function goback(){
  
    var pos = 450;
    var box = document.getElementById('wario3');
    var t = setInterval(move,5);

    function move(){
        if(pos <= 300){
            document.getElementById('coin4').style.display = 'none';
            document.getElementById('cloud4').style.display= "block"; 
        }
        if(pos <= 150){
            document.getElementById('coin5').style.display='none';
            document.getElementById('cloud5').style.display='block';
        }

        if(pos === 0){
            document.getElementById('chateau2').style.display="block";
            document.getElementById('wario3').style.display="none";
            clearInterval(t);

            }
        else{
            pos -= 1;
            box.style.left = pos+'px';
        }
    }
    document.getElementById('message').style.display = 'block';
};



function changeword(){
document.getElementById('container').style.backgroundImage= "url('browser.png')";
document.getElementById('tunnel').style.display="none";
document.getElementById('cloud5').style.display="none";
document.getElementById('cloud4').style.display="none";
document.getElementById('bank').style.display="none";
document.getElementById('g').style.display="block";

}

function changePerson(){
  document.getElementById('mario').style.display='none';
  document.getElementById('g').style.display="block";
} 