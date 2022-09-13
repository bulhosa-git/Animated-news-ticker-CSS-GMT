//Header Body
//Change msg1, msg2, msg3 class accordingly 
var headerBody = "<div class=\"pre-header msg1\">";

//Msg 1
headerBody += "<span>";
headerBody += "<a href=\"#\">";
headerBody += "My message #1";
headerBody += "</a>";
headerBody += "</span>";

//Msg 2 
headerBody += "<span>";
headerBody += "<a href=\"#\">";
headerBody += "My message #2";
headerBody += "</a>";
headerBody += "</span>";

//Msg 3
headerBody += "<span>";
headerBody += "<a href=\"#\">";
headerBody += "My message #3";
headerBody += "</a>";
headerBody += "</span>";

headerBody += '</div>'; 

//Inject
var elM = document.querySelector('.page-header');
if(elM) { //Safety first
     elM.insertAdjacentHTML('afterbegin', headerBody);
}