class FormValidation{
    formValues ={
        UserName : "",
        Email : "",
        PhoneNumber : "",
        PassWord : ""
    }
    errorValues = {
        UserNameErr : "",
        EmailErr : "",
        PhoneNumberErr : "",
        PassWordErr : ""

    }
    showErrorMsg(index,msg){
        const form_group = document.
        getElementsByClassName('form-group')[index]
        form_group.classList.add('error')
        form_group.getElementsByTagName('span')[0]
        .textContent = msg

    }
    showSuccesMsg(index){
        const form_group = document.
        getElementsByClassName('form-group')[index]
        form_group.classList.remove('error')
        form_group.classList.add('success')


    }
    getInputs(){
        document.getElementById
        this.formValues.UserName = document.
        getElementById('UserName').value.trim()

        this.formValues.Email = document.
        getElementById('Email').value.trim()

        this.formValues.PhoneNumber = document.
        getElementById('PhoneNumber').value.trim()

        this.formValues.PassWord = document.
        getElementById('PassWord').value.trim()

    }
    ValidatesUsername(){
        if(this.formValues.UserName === ""){
            this.errorValues.UserNameErr  = "plz Entr Ur Nme"
            this.showErrorMsg(0,this.errorValues.UserNameErr)
        }
        else if(this.formValues.UserName.length < 4 ){
            this.errorValues.UserNameErr = "username must be atleast 5 latters"
            this.showErrorMsg(0,this.errorValues.UserNameErr)}
        else if(this.formValues.UserName.length > 14 )
        {this.errorValues.UserNameErr = " username should not exceeds 14 latters"
        this.showErrorMsg(0,this.errorValues.UserNameErr)}
        else{
            this.errorValues.UserNameErr = ""
            this.showSuccesMsg(0)
        }
   }
    ValidateEmail(){
        //if(this.formValues.Email === ""){
            //this.errorValues.EmailErr  = "plz Entr valid Email"
            //this.showErrorMsg(1,this.errorValues.EmailErr)
        //}
       // else if(this.formValues.EmailErr)
       //const regExp = /^([a-zA-Z0-9-_.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z])?$/
        if(this.formValues.Email === ""){
            this.errorValues.EmailErr = " plz Enter Valid Email"
            this.showErrorMsg(1,this.errorValues.EmailErr)
        }
        //else if(!(regExp.test(this.errorValues.Email))){
            //this.errorValues.EmailErr ="Invalid Email"
           // this.showErrorMsg(1,this.errorValues.EmailErr)

        //} 
        else  {
            this.errorValues.EmailErr = ""
            this.showSuccesMsg(1)
        }
    }
    ValidatePassWord(){
        if(this.formValues.PassWord === ""){
            this.errorValues.PassWordErr  = "plz Entr Ur PSW"
            this.showErrorMsg(2,this.errorValues.PassWordErr)
        }
        else if(this.formValues.PassWord.length < 4 ){
            this.errorValues.PassWordErr = "PassWord must be atleast 5 latters"
            this.showErrorMsg(2,this.errorValues.PassWordErr)}
        else if(this.formValues.PassWord.length > 14 )
        {this.errorValues.PassWordErr = " password should not exceeds 14 latters"
        this.showErrorMsg(2,this.errorValues.PassWordErr)}
        else{
            this.errorValues.PassWordErr = ""
            this.showSuccesMsg(2)
       
        }
    }
     ValidatePhoneNumber() {
      if(this.formValues.PhoneNumber === ""){
          this.errorValues.PhoneNumberErr = "plz Entr The Valid MBL NO"
          this.showErrorMsg(3, this.errorValues.PhoneNumberErr)
      }
    }
}


const ValidatesUserInputs = new FormValidation()

document.getElementsByClassName('form')[0].
addEventListener('submit', () =>{
    event.preventDefault();
    ValidatesUserInputs.getInputs()
    ValidatesUserInputs.ValidatesUsername()
    ValidatesUserInputs.ValidateEmail()
    ValidatesUserInputs.ValidatePassWord()
    ValidatesUserInputs.ValidatePhoneNumber()
    
    

})

