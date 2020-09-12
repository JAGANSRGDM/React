//fetch and promises

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


getJSON("JS/data.json").then(d=>{
	console.log(d);
	basic_details(d.datails);
	stu_details(d.Data)
})

var main=document.querySelector(".parent-div")

function basic_details(S) {
	var img=document.createElement("img");
	img.src=S.photo;
	main.appendChild(img);

	var n=document.createElement("h1");
	n.textContent=S.Name;
	main.appendChild(n);
	var j=document.createElement("p");
	j.classList.add("Branch");
	j.setAttribute("id","Branch-id");
	j.textContent=S.Branch;
	main.appendChild(j);

	var h=document.createElement("h1");
	h.textContent="Skills";
	main.appendChild(h);
	h.appendChild(document.createElement("hr"));

	var ul=document.createElement("ul");
	for (var i = 0; i < S.Courses.length; i++) {
		var li=document.createElement("li");
		li.textContent=S.Courses[i];
		ul.appendChild(li);
	}
	main.appendChild(ul);
}

function stu_details(t) {
	var h=document.createElement("h1");
	h.textContent="Student Data";
	main.appendChild(h);
	h.appendChild(document.createElement("hr"));

	var table = document.createElement("table");
	var row="";
	for(var i in t){
		row +="<tr><td>"+t[i].name+"</td><td>"+t[i].phone+"</td><td>"+t[i].email+"</td></tr>";
	}
	table.innerHTML=row;
	main.appendChild(table);
}