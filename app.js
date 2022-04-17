
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



