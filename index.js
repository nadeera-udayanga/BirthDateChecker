var enter=document.getElementById('enter');
var displayYear=document.getElementById('displayYear');
var displayMonth=document.getElementById('displayMonth');
var displayDate=document.getElementById('displayDate');
var displayGender=document.getElementById('displayGender');
var displayMail=document.getElementById('showmymail');
enter.addEventListener('click',calculateBD);
function showmail(){
    displayMail.innerText="nadeeraudayanga27@gmail.com";
    setTimeout(function() {
        displayMail.innerText = "";
    },10000);
}
function calculateBD(){
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    const dates=[31,60,91,121,152,182,213,244,274,305,335];
    var idnumb = document.getElementById('idnmb').value;    
    var lengthOfId= idnumb.length;
    if (lengthOfId>=9 && lengthOfId<=12){
        // get first 7 digits from input string id number
        var firstNmb=idnumb[0];
        var secondNmb=idnumb[1];
        var thirdNmb=idnumb[2];
        var fourthNmb=idnumb[3];
        var fifthNmb=idnumb[4];
        var sixthNmb=idnumb[5];
        var seventhNmb=idnumb[6];

        //check for new id card   
        if (lengthOfId===12){
            var birthYear= firstNmb.concat(secondNmb,thirdNmb,fourthNmb);
            displayYr(birthYear);
            var birthDatePosition=fifthNmb.concat(sixthNmb,seventhNmb);
            maleFemlaeSelector(birthDatePosition);    
        }
        //check for old id card with or without letter V   
        else if(lengthOfId===9 || lengthOfId===10){
            var birthYear='19'.concat(firstNmb,secondNmb);
            displayYr(birthYear);
            var birthDatePosition=thirdNmb.concat(fourthNmb,fifthNmb);
            maleFemlaeSelector(birthDatePosition);    
        }    
    }
    //display an error if the enterd id card number too short or long
    else if (lengthOfId<=8 || lengthOfId>=13) {
        alert("Invalid Identity Card number!");
    }


    function maleFemlaeSelector(birthDatePosition){
        if (0<birthDatePosition && birthDatePosition<=866){
            //check for males
            if (birthDatePosition<=366){
                maleCalculation(birthDatePosition);
            }
            //check for females
            else if(500<=birthDatePosition){
                femaleCalculation(birthDatePosition);
            }
        }
        //if date and month calculation 3 digits are out of range then print an error
        else{
            alert("Invalid Identity Card number!");
        }
    }

    function maleCalculation(birthDatePosition){
        displayGenderr("Male");
        let count=0;
        let previousMonthEnd=0;
        for (let date of dates){
            if (birthDatePosition<=date){
                var birthDayDate=birthDatePosition-previousMonthEnd;
                break;
            }
            previousMonthEnd=date;
            count++;
        }
        displayMo(count);
        displayDt(birthDayDate);        
    }

    function femaleCalculation(birthDatePosition){
        displayGenderr("Female");
        let count=0;
        let previousMonthEnd=0;
        birthDatePosition=birthDatePosition-500;
        for (let date of dates){
            if (birthDatePosition<=date){
                var birthDayDate =birthDatePosition-previousMonthEnd;
                break;
            }
            previousMonthEnd=date;
            count++;
        }
        displayMo(count);
        displayDt(birthDayDate);        
    }
    

    //display data
    function displayYr(birthYear){
        displayYear.innerText=birthYear;    
     }
     function displayMo(count){
        displayMonth.innerText=months[count];         
     }
     function displayDt(birthDayDate){
        displayDate.innerText=birthDayDate;
     }
     function displayGenderr(gender){
        displayGender.innerText=gender;
    }
}


        
        