
var username =  prompt  (" Enter your name ");

var gender = prompt  (" Enter male or female");


if (gender.toLowerCase()  == "male")

{
    var age = prompt  (" Enter age "); 


    if (age > 0)
    { 
        var message =  confirm("if  you need watch message welcome ")
      {  (message == true) ? alert(` Hello Mr ${username} your age is ${age}`): ` 0 `;}
    }
        else alert (` The age entered is incorrect, please try again and write your age using the numbers and the number is greater than 0  `)


}
    


else if (gender.toLowerCase()  == "female")

{
    var age = prompt  (" Enter age "); 


    if (age > 0)
    { 
        var message =  confirm(" if you need watch message welcome ")
      {  (message == true) ? alert(` Hello Ms ${username} your age is ${age}`): ` 0 `;}
    }
        else alert (` The age entered is incorrect, please try again and write your age using the numbers and the number is greater than 0  `)


}

else
{
    var age = prompt  (" Enter age "); 

{
    if (age > 0)
    { 
        var message =  confirm(" you need watch message welcome ")
      {  (message == true) ? alert(` Hello  ${username} your age is ${age}`): ` 0 `;}
    }
        else alert (` The age entered is incorrect, please try again and write your age using the numbers and the number is greater than 0    !`)

}
}
{
let answerPrompt1 =  prompt(" you need add to   js  (yes/no) ");
let answerPrompt2  = prompt(" you need add to   c   (yes/no) ");
let answerPrompt3  = prompt(" you need add to  c++ ( yes/no) ");
let arrayn = [] ;
arrayn.push(gitprom());
arrayn.push(gitprom1());
arrayn.push(gitprom2());
for(let i = 0 ; i < arrayn.length ; i++ )
{

  console.log(arrayn[i]);

}
function gitprom ()
{
  if (answerPrompt1 == "" || answerPrompt1 == null )
{
  answerPrompt1 ="undfind";
  return answerPrompt1;
}

else if(`${answerPrompt1.toLowerCase()  == "yes" }` || `${answerPrompt1.toLowerCase()  == "no" }`)
{
  return answerPrompt1;
}

}

function gitprom1 ()
{
  if (answerPrompt2 == "" || answerPrompt2 == null )
{
  answerPrompt2 ="undfind";
  return answerPrompt2;
}

else if(`${answerPrompt2.toLowerCase()  == "yes" }` || `${answerPrompt2.toLowerCase()  == "no" }`)
{
  return answerPrompt2;
}
}



function gitprom2 ()
{
  if (answerPrompt3 == "" || answerPrompt3 == null )
{
  answerPrompt3 ="undfind";
  return answerPrompt3;
}


else if(`${answerPrompt3.toLowerCase()  == "yes" }` || `${answerPrompt3.toLowerCase()  == "no" }`)
{
  return answerPrompt3;
}

}

}
