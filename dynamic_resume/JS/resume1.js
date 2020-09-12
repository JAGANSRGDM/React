

function getJSON(file) {
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}else{
				reject(new Error('error'));
			}
		})
	})
}

getJSON("JS/resume.json").then(d=>{
	console.log(d);
	resume_part1(d.part1);
	resume_part2(d.part2);

})


var main=document.querySelector(".parent1");
var div1=document.querySelector(".child1");
var div2 = document.querySelector(".child2");

function resume_part1(S) {
	var center=document.createElement("center");
	var img=document.createElement("img");
	img.src=S.photo;
	center.appendChild(img);
	div1.appendChild(center);

	var n=document.createElement("h3");
	n.textContent=S.name;
	center.appendChild(n);
	div1.appendChild(center);
	var e=document.createElement("h5");
	e.textContent=S.email;
	center.appendChild(e);
	div1.appendChild(center);

	var h=document.createElement("h4");
	h.textContent="Technical Skills:";
	div1.appendChild(h);

	var ul=document.createElement("ul");
	for (var i = 0; i < S.languages.length; i++) {
		var li=document.createElement("li");
		li.textContent=S.languages[i];
		ul.appendChild(li);
	}
	div1.appendChild(ul);

	var h=document.createElement("h4");
	h.textContent="Hobbies:";
	div1.appendChild(h);

	var ul=document.createElement("ul");
	for (var i = 0; i < S.Hobbies.length; i++) {
		var li=document.createElement("li");
		li.textContent=S.Hobbies[i];
		ul.appendChild(li);
	}
	div1.appendChild(ul);

	var h=document.createElement("h4");
	h.textContent="Languages:";
	div1.appendChild(h);

	var ul=document.createElement("ul");
	for (var i = 0; i < S.lan.length; i++) {
		var li=document.createElement("li");
		li.textContent=S.lan[i];
		ul.appendChild(li);
	}
	div1.appendChild(ul);

	main.appendChild(div1);
}


function resume_part2(t) {
	var center=document.createElement("center");
	var h=document.createElement("h3");
	h.textContent="Carrier Objective:";
	div2.appendChild(h);
	var h=document.createElement("p");
	h.textContent=t.carrier_objective;
	div2.appendChild(h);

	var h=document.createElement("h3");
	h.textContent="Acadamic Details:";
	div2.appendChild(h);

	var table = document.createElement("table");

	var row="<tr><th>"+"Sno"+"</th><th>"+"qualification"+"</th><th>"+"stream"+"</th><th>"+"college"+"</th><th>"+"YOP"+"</th><th>"+"percentage"+"</th></tr>";
	//var row="";
	for(var i in t.Education){
		row +="<tr><td>"+t.Education[i].sno+"</td><td>"+t.Education[i].qualification+"</td><td>"+t.Education[i].stream+"</td><td>"+t.Education[i].college+"</td><td>"+t.Education[i].yop+"</td><td>"+t.Education[i].percentage+"</td></tr>";
	}
	table.innerHTML=row;
	center.appendChild(table);
	div2.appendChild(center);

	var n=document.createElement("h3");
	n.textContent="Work Experience:";
	div2.appendChild(n);
	var h=document.createElement("p");
	h.textContent="Company Name:  "+t.Experience.Company_name;
	div2.appendChild(h);
	var j=document.createElement("p");
	j.textContent="Designation:  "+t.Experience.Designation;
	div2.appendChild(j);
	var a=document.createElement("p");
	a.textContent="Roles/Responsibilities: "+t.Experience.Responsibilities;
	div2.appendChild(a);

	var h=document.createElement("h3");
	h.textContent="Decleration:";
	div2.appendChild(h);
	var h=document.createElement("p");
	h.textContent=t.Decleration;
	div2.appendChild(h);

	var j=document.createElement("p");
	j.classList.add("decl");
	j.setAttribute("id","decl-id");
	var a=document.createElement("div");
	var c=document.createElement("p");
	c.textContent="Date:";
	a.appendChild(c);
	var c=document.createElement("p");
	c.textContent="Place: "+t.Place;
	a.appendChild(c);
	j.appendChild(a);

	var b=document.createElement("div");
	b.classList.add("ml-auto");
	var e=document.createElement("p");
	e.textContent=t.Sign;
	b.appendChild(e);
	var d=document.createElement("p");
	d.textContent="Signature";
	b.appendChild(d);
	j.appendChild(b);

	div2.appendChild(j);

	main.appendChild(div2);
}