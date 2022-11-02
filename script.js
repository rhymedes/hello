function automatic() {wordanime();setTimeout(anime,400);} 
  function wordanime(){sentence.style="transform:scale(.3);";sentenceb.style="transform:scale(.3);";sentencec.style="transform:scale(.3);";} 
  function anime() {sentence.style="transform:scale(1);";sentenceb.style="transform:scale(1);";sentencec.style="transform:scale(1);";}
  
  function automatic2() {wordanime2();setTimeout(anime2,400);} 
  function wordanime2(){sentence.style.opacity="0";sentenceb.style.opacity="0";sentencec.style.opacity="0";} 
  function anime2() {sentence.innerHTML = sentence2.innerHTML;sentenceb.innerHTML = sentenceb2.innerHTML;sentencec.innerHTML="";sentence.style.opacity="1";sentenceb.style.opacity="1";setTimeout(automatic2b,3000);}
  function automatic2b(){sentenceb.innerHTML = "";sentencec.innerHTML = sentencec2.innerHTML;sentencec.style.opacity="1";setTimeout(startct,400);}
  
  function automatic3() {wordanime3();setTimeout(anime3,400);} 
  function wordanime3(){sentence.style.opacity="0";sentenceb.style.opacity="0";sentencec.style.opacity="0";} 
  function anime3() {sentence.innerHTML = sentence3.innerHTML;sentenceb.innerHTML = sentenceb3.innerHTML;sentencec.innerHTML = sentencec3.innerHTML + today;sentence.style.opacity="1";sentenceb.style.opacity="1";sentencec.style.opacity="1";}
  
  function theend(){Bn.style.display="none";setTimeout(latest,500);} function latest(){tmbl.innerHTML="💌 Send";Knob.style="margin-top:10px;opacity:1;transform: scale(1)";ftom=5;fungsi=0;}
  
  async function received(){
      lost();ftchange=1;
      setTimeout(ftappear,400);
      Bn2.style.display="none";
      wallpaper.style="transform: scale(1)";
      bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);transition:all .7s ease;border-radius:var(--bingkai);margin-top:0;";
      Knob.style="opacity:0;transition:all .5s ease;transform: scale(.1);";
      automatic2();
   }

  flag=1;flagg=1;
  function rejected(){
  	if(fungsi==1){
  	if(flagg==1){Bn.style="margin:12px 0 12px 12px;cursor:default;opacity:0;transition:all 0s ease;";flagg=2;
                 Bn2.style="width:auto;opacity:1;transition:all .3s ease;margin:160px 0 12px 140px;"}
  	}
   }
  function rejected2(){
  	if(fungsi==1){
  	if(flagg==2){Bn2.style="width:auto;opacity:1;transition:all .3s ease;margin:190px 0 12px 12px;";flagg=3}
  	    else if(flagg==3){Bn2.style="width:auto;opacity:1;transition:all .3s ease;margin:160px 160px 12px 12px;";flagg=4}
  		else if(flagg==4){Bn2.style="transition:all .3s ease;margin:12px 0 12px 12px;";Bn.style="margin:12px 0 12px 12px";flagg=1}
  	    }
   }

  function startct(){
    var timeleft = 7;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("ctimer").textContent = timeleft;
    if(timeleft <= 0)
      clearInterval(downloadTimer);
      if(timeleft==0){
      setInterval(createHeart,200);
      lost();ftchange=2;
      setTimeout(ftappear,400);automatic3();
      setTimeout(theend,2000);
      }
    },1000);
  }