var passwordLength = function(){
    var pwLength = window.prompt("How many characters do you want the password to be? enter a number between 8 and 128.");
    var pwLength = parseInt(pwLength);
    if(!(isNaN(pwLength)) && pwLength >= 8 && pwLength <= 128){
      window.alert("Your password will be " + pwLength + " Chatacters")
      passWord.pLength = pwLength;
      console.log("length = " +passWord.pLength)
    }
    else{
      window.alert("please enter a number between 8 and 128.");
     passwordLength();
    }
    passwordScharacters();
  }
  var passwordScharacters =function(){
    var pwSchar = window.prompt("Does your password requier special Characters? !@#$%^&*()_+");
    pwSchar = pwSchar.toLowerCase();
    switch (pwSchar){
      case "yes":
        window.alert("Your password will have special characters.");
        passWord.pSchar = true;
        console.log("schar =" + passWord.pSchar)
        break;
  
      case "no":
        window.alert("Your password will not have special characters.");
        passWord.pSchar = false;
        console.log("schar =" + passWord.pSchar)
        break;
      default:
        window.alert("Please type yes or no");
        passwordScharacters();
        break;
    }
    passwordUppercase();
  }
  var passwordUppercase =function(){
    var pwCase = window.prompt("Does your password requier uppercase characters?");
    pwCase = pwCase.toLowerCase();
    switch (pwCase){
      case "yes":
        window.alert("Your password will have uppercase characters.");
        passWord.pUpercase = true;
        console.log("case = " +passWord.pUpercase)
        break;
  
      case "no":
        window.alert("Your password will not have upper case characters.");
        passWord.pUpercase = false;
        console.log( "case =" +passWord.pUpercase)
        break;
      default:
        window.alert("Please type yes or no");
        passwordUppercase();
        break;
    }
    passwordNumerical();
  }
  var passwordNumerical = function(){
    var pwNum = window.prompt("Does your password requier number?");
    pwNum = pwNum.toLowerCase();
    switch (pwNum){
      case "yes":
        window.alert("Your password will have numbers.");
        passWord.pNumerical = true;
        console.log( "num =" +passWord.pNumerical)
        
        break;
  
      case "no":
        window.alert("Your password will not have numbers.");
        passWord.pNumerical = false;
        console.log("num =" +passWord.pNumerical)
       
        break;
      default:
        window.alert("Please type yes or no");
        passwordNumerical();
           break;
    }
    genPassword();
  }
  var getChar = function(array){
    var rand = Math.floor(Math.random() * array.length);
    console.log( "rand is = " + rand);
    rand = Math.round(rand);
    console.log("rounded rand = " + rand);
    pwAray[i]= array[rand];
    console.log("selected " + pwAray[i]);
  }
  var aSelecet = function(min, max){
    var selector = Math.random() * (max - min)+1;
    selector = Math.round(selector);
    console.log(" selector is " + selector);
    return selector;
  }
  
  var genPassword = function(){
    var lcArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
     var ucArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var  numArray = ["1","2","3","4","5","6","7","8","9","0"];
    var sArray = ["!","@","#","$","%","^","&","*","(",")"];
      //lower case only pw
    if ((passWord.pSchar === false) && (passWord.pUpercase === false) && (passWord.pNumerical === false)){
      for (i =0; i < passWord.pLength; i++){
        getChar(lcArray);
        
      }
    }
     else if ((passWord.pSchar === false) && (passWord.pUpercase === true) && (passWord.pNumerical === false)){
        
        for (i =0; i < passWord.pLength; i++){
          var selector = aSelecet(1,2);
          if(selector === 1){
            getChar(lcArray);
          }
          
            if(selector === 2){
              getChar(ucArray);
            }
    
          }
          
        
          
      }
      else if ((passWord.pSchar === true) && (passWord.pUpercase === false) && (passWord.pNumerical === false)){
        
        for (i =0; i < passWord.pLength; i++){
          var selector = aSelecet(1,2);
          if(selector === 1){
            getChar(lcArray)
          }
          
            if(selector === 2){
              getChar(sArray)
            }
    
          }
          
        
          
      }
      else if ((passWord.pSchar === false) && (passWord.pUpercase === false) && (passWord.pNumerical === true)){
        
        for (i =0; i < passWord.pLength; i++){
          var selector = aSelecet(1,2);
          if(selector === 1){
            getChar(lcArray)
          }
          
            if(selector === 2){
              getChar(numArray)
            }
    
          }
          
        
          
      }
      else if ((passWord.pSchar === true) && (passWord.pUpercase === true) && (passWord.pNumerical === false)){
        
        for (i =0; i < passWord.pLength; i++){
          var selector = aSelecet(1,3);
          if(selector === 1){
            getChar(lcArray)
          }
          
            if(selector === 2){
              getChar(ucArray)
            }
  
            if(selector === 3){
              getChar(sArray)
              }
    
          }
          
        
          
      }
      else if ((passWord.pSchar === false) && (passWord.pUpercase === true) && (passWord.pNumerical === true)){
        
        for (i =0; i < passWord.pLength; i++){
          var selector = aSelecet(1,3);
          if(selector === 1){
            getChar(lcArray)
          }
          
            if(selector === 2){
              getChar(ucArray)
            }
  
            if(selector === 3){
              getChar(numArray)
              }
    
          }
          
        
          
      }
      else if ((passWord.pSchar === true) && (passWord.pUpercase === false) && (passWord.pNumerical === true)){
        
        for (i =0; i < passWord.pLength; i++){
          var selector = aSelecet(1,3);
          if(selector === 1){
            getChar(lcArray)
          }
          
            if(selector === 2){
              getChar(sArray)
            }
  
            if(selector === 3){
              getChar(numArray)
              }
    
          }
          
        
          
      }
      else if ((passWord.pSchar === true) && (passWord.pUpercase === true) && (passWord.pNumerical === true)){
        
        for (i =0; i < passWord.pLength; i++){
          var selector = aSelecet(1,4);
          if(selector === 1){
            getChar(lcArray)
          }
          
            if(selector === 2){
              getChar(ucArray)
            }
  
            if(selector === 3){
              getChar(sArray)
              }
              if(selector === 4){
                getChar(numArray)
                }
    
          }
          
        
          
      }
  
    var pw = pwAray.join('');
    console.log("Your password is " + pw);
    var passwordTextField = document.getElementById('password');
    passwordTextField.value = pw;1
  }
  
  var passWord ={
  pLength: 0,
  pSchar: false,
  pUpercase: false,
  pNumerical: false,
  };
  var pwAray = [];
  
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  
  // Add event listener to generate button writePassword
  generateBtn.addEventListener("click", passwordLength);