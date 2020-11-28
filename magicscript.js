
//------------------------------------all answers----------------------------------------//
var ans_box = [
  "I think you should think over it again.",
  "Your friend knows better than me.",
  "My opinion says you are asking a question that has answer within you.",
  "Life remains happy with a good decision. You should think again",
  "Just relax and think over what you are asking me.",
  "I am too very much excited to know this.",
  "Your decision will decide your future",
  "I think you should relax first.",
  "This question may be intresting but think over.",
  "once you start but never step back in asking anything, but think again before asking",
  "Your question has many faces.",
  "Traffic is increasing on our server due to our good support, so please ask a relevant question.",
  "Don't be too silly and ask a logical question.",
  "We are very much supportive but that doesn't mean you ask anything.",
  "A good song plays a good role, just listen to a melody and enjoy your life.",
  "Forget about all the problems and sit back to relax.",
  "Call your best friend and ask if he can join you to find solution to this problem",
  "I think your question is not upto the mark.",
  "Please ask a question that relates to a real life.",
  "Your family has more answer than me So, just go there and sit to talk with them.",
  "Great query! but this is not the right place to ask this.",
  "Maybe but this could be a false on other conditions",
  "Great to join a person with so much queries",
  "Once you stop here then i will feel sad.",
  "I think you love to ask so many question. But my source says this is a tough question.",
  "I am afraid to reply on this question.",
  "My life will be in danger if i reply you this.",
  "Don't ask again such an easy question.",
  "Oh wow! are you serious.",
  "Today weather is so beautiful and you are asking me this question.",
  "There are so many exciting questions but you are stick to a question that is of the old age era.",
  "Ha Ha Ha ! If I was your friend I would have attempted a wrong step on this question. ",
  "Great to spend time with you but always love to answer your questions.",
  "Do not come to this type of queries so quickly.",
  "There are lots of question in your mind but this was so extra-ordinary.",
  "Great! But wait you are not at the right side.",
  "Maybe this is true to you but according to me it is unrelevant.",
  "Oh No! I am feeling cold but you should think of your health.",
  "My friend too has the same problem but he controlled on his emotions.",
  "Once you complete your decision just sit back.",
  "A day wasted is the day in hell. Don't you agree.",
  "I am a person who can solve your problems in real time.",
  "Every solution is in you So just think over it.",
  "Your asked right question but place is wrong.",
  "Are you judging me? I am upset with you.",
  "You are not taking me seriously.",
  "I am here for you.Not for my other non-living friends.",
  "Let me think over it again.",
  "You submitted a question that has tricked me too.",
  "I think you are stressed.",
  "Your question has no real life existence",
  "Be on your own grounds and get back to me after a while."
];
//---------------------------------------------------------------------------------------------------
function enterOne()
{
	var user=document.getElementById('nameball').value;
	if(user=="")
	{
		alert("Hello Mr.X! Please Enter your name first.");
	}
	else if(user.length<=2)
	{
		alert("Hello Mr! I think you are not serious here.");
	}
	else if(user.length>=8)
	{
		alert("Hello Mr! I think you are not serious here.");
	}
	else
	{
		document.getElementById('username2').innerHTML=user[0].toUpperCase()+user.substring(1);
		document.getElementById('username2').style.display="block"
		document.getElementById('ansarea').value="none";
		document.getElementsByClassName('backball')[0].style.display="none";
		document.getElementById('reqarea').value="none";
		document.getElementById("branding").style.display="block";
		document.getElementsByClassName('backball2')[0].style.display="block";
		document.getElementById('uname').innerHTML=user[0].toUpperCase()+user.substring(1);
		document.getElementById("exitButton").style.display="block";
	}
}
function noname()
{
	document.getElementById('nameball').value="";
}
function enterques()
{
	document.getElementsByClassName('backball')[0].style.display="none";
	document.getElementsByClassName('backball2')[0].style.display="none";
	document.getElementById("quesbox").style.display="block";
	document.getElementById("branding").style.display="block";
	document.getElementById("exitButton").style.display="block";

}

function askOne()
{
	value_ques=document.getElementById('qbox').value;
	if(value_ques.length<=6)
	{
		alert('Please fill any question!');
	}
	else
	{
//---------------------------------------------------------	
var any_one = ans_box[Math.floor(Math.random()*ans_box.length)];
document.getElementById('ansbox').innerHTML=any_one;

//---------------------------------------------------------
//===========================High Level Answers=========================
var hot=document.getElementById('qbox').value;
// var select=hot.search('a');
// if(a="Where")
// {
// document.getElementById('ansbox').innerHTML="I live every where but don't know where does everyone lives.";
// }
switch(hot)
{
	case "who r u":
	document.getElementById('ansbox').innerHTML="I am Mr.Fortune and your best friend from now.";
	break;
	case "who are u":
	document.getElementById('ansbox').innerHTML="I am Mr.Fortune and your best friend from now.";
	break;
	case "who are you":
	document.getElementById('ansbox').innerHTML="I am Mr.Fortune and your best friend from now.";
	break;
	case "who r you":
	document.getElementById('ansbox').innerHTML="I am Mr.Fortune and your best friend from now.";
	break;
	case "who are u":
	document.getElementById('ansbox').innerHTML="I am Mr.Fortune and your best friend from now.";
	break;
	case "who r u?":
	document.getElementById('ansbox').innerHTML="I am Mr.Fortune and your best friend from now.";
	break;
	case "who are u?":
	document.getElementById('ansbox').innerHTML="I am Mr.Fortune and your best friend from now.";
	break;
	case "who are you?":
	document.getElementById('ansbox').innerHTML="I am Mr.Fortune and your best friend from now.";
	break;
	case "who r you?":
	document.getElementById('ansbox').innerHTML="I am Mr.Fortune and your best friend from now.";
	break;
	case "who are u?":
	document.getElementById('ansbox').innerHTML="I am Mr.Fortune and your best friend from now.";
	break;
	default:
	break;
}
	document.getElementById("branding").style.display="block";
	document.getElementById("quesbox").style.display="none";
	document.getElementById('loadingarea').style.display="block";
	document.getElementById("ansarea").style.display="none";
	document.getElementById("exitButton").style.display="block";
}
}
function load()
{
	document.getElementById('loadingarea').style.display="none";
	document.getElementById('ansarea').style.display="block";
}
function quesblank()
{
	document.getElementById('qbox').value="";
}
function ansclick()
{
	document.getElementById("ansbox").innerHTML="This is so exciting...";
	document.getElementById("exitButton").style.display="block";
}
function nextQues()
{
	document.getElementById("quesbox").style.display="block";
	document.getElementById("ansarea").style.display="none";
	document.getElementById("exitButton").style.display="block";
	document.getElementById('qbox').value="";
}
function enterhold()
{
	document.getElementById("reqarea").style.display="block";
	document.getElementsByClassName('backball')[0].style.display="none";
	document.getElementsByClassName('backball2')[0].style.display="none";
	document.getElementById("quesbox").style.display="none";
	document.getElementById("ansarea").style.display="none";
	document.getElementById("branding").style.display="block";
	document.getElementById("exitButton").style.display="block";
}
function tryQues()
{
	document.getElementById("reqarea").style.display="none";
	document.getElementsByClassName('backball')[0].style.display="none";
	document.getElementsByClassName('backball2')[0].style.display="none";
	document.getElementById("quesbox").style.display="block";
	document.getElementById("ansarea").style.display="none";
	document.getElementById("branding").style.display="block";
	document.getElementById("exitButton").style.display="block";
}
function outToMain()
{
	document.getElementById("allquesbtn").style.display="none";
	document.getElementById("username2").style.display="none";
	document.getElementById("reqarea").style.display="none";
	document.getElementsByClassName('backball2')[0].style.display="none";
	document.getElementById("quesbox").style.display="none";
	document.getElementById("ansarea").style.display="none";
	document.getElementById("branding").style.display="none";
	document.getElementsByClassName('backball')[0].style.display="block";
	document.getElementById("exitButton").style.display="none";
	document.getElementById('nameball').value="";
}
function allQues()
{
document.getElementById('allquesbtn').style.display="block";
document.getElementById("quesbox").style.display="none";
}
	

function ques1()
{
var any_one_ans = ans_box[Math.floor(Math.random()*ans_box.length)];
document.getElementById('loadingarea').style.display="block";
document.getElementById('ansbox').innerHTML=any_one_ans;
document.getElementById('allquesbtn').style.display="none";
}