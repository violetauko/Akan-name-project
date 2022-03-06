var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function validate() {
  var{year,month,date,gender} = document.myForm;
  if( year.value == "" || year.value.length !=4 ) {
     alert( "Please provide a valid year of birth!" );
     year.focus() ;
     return false;
  }
  else if( month.value == "" || month.value.length != 2 || month.value > 12  || month.value <= 0){
     alert( "Please provide your month of birth! between 1 and 12" );
     month.focus() ;
     return false;
  }
  else if( date.value == "" || month.value.length != 2|| date.value > 31 ||date.value <= 0) {
     alert( "Please provide a valid date that you were born!" );
     date.focus() ;
     return false;
  }
  else if(gender.value==null||gender.value==undefined|| gender.value=="") {
      alert("You must select male or female");
      return false;
  }   
  else{
      dayValue(year,month,date,gender)
    return true ;
  }
  
}

function dayValue(year,month,date,gender){
  CC = parseInt(year.value.substring(0,2));
  YY = parseInt(year.value.substring(2,4));
  MM = parseInt(month.value);
  DD = parseInt(date.value);
  d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
  
  getGender(Math.trunc(d),gender.value);
}

function getGender(dayValue,gender){

    if(dayValue<7&&gender==="male"){
        alert("Opps!! You were born on " +dayNames[dayValue] + " and Your akan name is " + maleNames[dayValue]);
    }else if(dayValue<7&&gender==="female"){
        alert("Opps!! You were born on " +dayNames[dayValue] + " and Your akan name is " + femaleNames[dayValue]);
    }
}