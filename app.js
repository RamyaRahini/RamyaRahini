var form = document.getElementById('form')

var error = []
var succes =

form.addEventListener('submit',function(e){
    e.preventDefault()


   var FirstName = document.getElementById('fname')
   var LastName = document.getElementById('lname')
   var Email = document.getElementById('email')
   var Password = document.getElementById('psw')


   var result = document.getElementsByClassName('result')[0];
   result.innerHTML = `<p>first name: ${FirstName.value}</p>`
   var result1 = document.getElementsByClassName('result1')[0];
   result1.innerHTML = `<p>last name: ${LastName.value}</p>`
   var result2 = document.getElementsByClassName('result2')[0];
   result2.innerHTML = `<p>email: ${Email.value}</p>`
   var result3 = document.getElementsByClassName('result3')[0];
   result3.innerHTML = `<p>password: ${Password.value}</p>`


   //if(FirstName.value == ""){
       //alert("please Enter The FirstName")
      // return false;
   // }
    //else if(FirstName>6){
       // alert("FirstName must to be 6 latters")
       // return false;
    //}
    
   // if(LastName.value == ""){
       // alert("please Enter The LastName")
       //return false;
   // }
   // else if(LastName>6){
       // alert("LastName must to be 6 latters")
       // return false;
    //}
    //if(Password.value == ""){
       // alert("please Enter The Password")
        //return false;
    //}
    //else if(Password>7){
      //  alert("Password must to be 7 latters")
       // return false;

    //}
    //alert("form is submited")
   FirstName>6
switch(true){
    case FirstName ="sumathie" ||  FirstName>6:
        console.log('plz enter FirstName (');
        break;
        
        default:console.log('enter the value :)')
        
    }

        




})
