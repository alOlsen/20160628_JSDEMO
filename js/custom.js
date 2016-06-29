//GLOBAL SCOPE
//

//

var Person = function(){
	this.name = "Al";

	this.sayHi = function(){
		console.log( "HELLO, my name is "+ this.name )
	}

	this.walk = function(){
		console.log( "walking...")
	}
}

var stranger = new Person();

stranger.sayHi();
stranger.walk();

//jSON

 var PersonData = {
 		name : "Jessica",
 		sport : "Tennis",
 		hero  : "Superman"
 }

console.log( PersonData)
console.log( PersonData.sport )

var FormElem = [{
					fieldName : "username",
					fieldType : "text"
				},
				{
					fieldName : "password",
					fieldType : "password"
				},
				{
					fieldName : "gender",
					fieldType : "radio",
					option	  : [
									"male",
									"female"
								]
				}
				]



$(document).ready( function(){

	console.log( FormElem )

	var fieldCount 	= FormElem.length;
	var optionCount = 0;



	for( i = 0; i < fieldCount; i++){


		if( FormElem[i].fieldType === "text"){
			$("#dynForm").append(FormElem[i].fieldName+" : <input type='text' name='"+ FormElem[i].fieldName +"' id='" +FormElem[i].fieldName + "'/>")
		}else if(FormElem[i].fieldType === "password"){
			$("#dynForm").append(FormElem[i].fieldName+" : <input type='password' name='"+ FormElem[i].fieldName +"' id='" +FormElem[i].fieldName + "'/>")
		}else if(FormElem[i].fieldType === "radio"){
			optionCount = FormElem[i].option.length;

			for( j = 0; j < optionCount; j++ ){
				
				$("#dynForm").append(FormElem[i].option[j]+" : <input type='radio' name='"+ FormElem[i].fieldName +"' id='" +FormElem[i].fieldName + "'/>")

			}

		}
	}

});