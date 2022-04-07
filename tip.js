

function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("bill").value;
     var select = document.getElementById('rating');
	var option = select.options[select.selectedIndex];
	var noOfPerson=document.getElementById("person").value;
    var dis=(parseInt(option.value))/100*(parseInt(inputVal));
    var res=dis/(parseInt(noOfPerson));
    document.getElementById("res").innerHTML="TIP AMOUNT FROM EACH PERSON IS  "+res+"$ ";
}