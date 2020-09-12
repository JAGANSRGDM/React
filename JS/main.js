// var a=document.getElementById("para").innerHTML="JAGAN saragadam";
// document.write(a);


/*Syntax:
for (var i = 0; i < Things.length; i++) {
	Things[i]
}

while(condition){

}

if (condition) {

}
else{

}*/

//Object Creation
// var details={
// 	Name:"Jagan Saragadam",
// 	Branch:"ES&VLSID",
// 	Courses:["python3","ReactJs","Java","Django"]
// }
//For loop syntax and working:

/*for (var i = 0; i < details.Courses.length; i++) {
	document.writeln(details.Courses[i]+"<br>");
}
*/
// for (var i in details) {
// 	document.writeln(details[i]+"<br>");
// }

/*for (var i of details.Courses) {
	document.writeln(i+"<br>");	//for of only for arrays and strings not for objects.
}*/

/*var a=7;
if (a<7) {
	document.write("Success");
}
else if(a==7){
	document.write("Jagan");
}
else{
	document.write("Failed");
}
*/
//functions:

// function add(a,b){
// 	document.write(a+b+"<br>");
// }

//arrow functions:

// addd=(a,b)=>{
// 	document.write(a+b+"<br>");
// }
// addd(10,10);
// add(7,7);


// //function scopes:
// var a=7;
// {
// 	var a=9;
// 	document.write(a,"<br>");
// }
// document.write(a,"<br>");

// //less function scope:
// let b=7;
// {
// 	let b=9;
// 	document.write(b,"<br>");
// }
// document.write(b,"<br>");

// //constant scope:
// const a=7;
// {
// 	const a=20;
// 	document.write(a,"<br>")
// }
// document.write(a,"<br>")

// addd=(a,b)=>{
// 	window.alert(a+b);
// }
// addd(10,10);

// addd=(a,b)=>{
// 	window.confirm(a+b);
// }
// addd(10,10);

// swal("jagan")


/*******CLASSES****************/

// class sj{
// 	constructor(course){
// 		this.course=course;
// 	}
// }

// var a=new sj("Embedded Systems");
// document.write(a.course);

///*************Destructure****************///

// var j=["sj","jagan","ramu"];
// var[name1,name2,name3]=j;
// document.write(name2);

/*****************spread and rest**************/
//REST[....parametername];

function add(a,b,...t){
	document.write(a+b,"<br>");
	document.write(t);

}
add(1,2,3,4,5,6,7,8);

//SPREAD []

//
