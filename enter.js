answer1=0;
$( document ).ready(function() {
  var activeQuestion=0;
  $('span').bind("enterKey",function(e){
    console.log("1");
     switch(activeQuestion){
     	  case 0:
          if (document.getElementById('input').innerHTML.toLowerCase().startsWith("y")){
            document.getElementById('text').innerHTML+=" "+document.getElementById('input').innerHTML;
            document.getElementById('text').id="oldText";
            document.getElementById('texts').innerHTML+='<br>';
            document.getElementById('texts').innerHTML+='<p id="text" class="text UbuntuFont"></p>';
            typeString("Good Choice, press enter to continue.");
            answer1++;
            activeQuestion++;
          }else{
            document.getElementById('text').innerHTML+=" "+document.getElementById('input').innerHTML;
            document.getElementById('text').id="oldText";
            document.getElementById('texts').innerHTML+='<br>';
            document.getElementById('texts').innerHTML+='<p id="text" class="text UbuntuFont"></p>';
            typeString("Hmm, that's a shame.");
            activeQuestion++;
          }
          break;
        case 1:
          if (answer1==1)
            window.location = "/home";
          else
            debugger;
            document.getElementById('text').className+=" hinge";
          break;

     	
     }
  });
  $('span').keyup(function(e){
      if(e.keyCode == 13)
      {
          $(this).trigger("enterKey");
      }
  });
});