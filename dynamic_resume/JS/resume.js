
var main=document.querySelector(".parent");
	var div=document.createElement("div");
	div.classList.add("child");
	div.setAttribute("id","child-id");
	var div2=document.createElement("div");
	div2.classList.add("card");
	div2.setAttribute("id","card-id");
	var center=document.createElement("center");
	var img=document.createElement("img");
	img.src="../images/1.png";
	center.appendChild(img);
	div2.appendChild(center);
	var s=document.createElement("h2");
	s.textContent="Jagan Saragadam";
	center.appendChild(s);
	div2.appendChild(center);
	var i=document.createElement("h4");
	i.textContent="jagansrgdm@gmail.com";
	center.appendChild(i);
	div2.appendChild(center);
	var btn=document.createElement("button");
	btn.textContent="View Resume";
	btn.onclick =()=>{
		location.href="resume_redirect.html";
	}
	center.appendChild(btn);
	div2.appendChild(center);
	div.appendChild(div2);
	main.appendChild(div);

	

	var div2=document.createElement("div");
	div2.classList.add("card");
	div2.setAttribute("id","card-id");
	var center=document.createElement("center");
	var img=document.createElement("img");
	img.src="../images/1.png";
	center.appendChild(img);
	div2.appendChild(center);
	var s=document.createElement("h2");
	s.textContent="Jagan Saragadam";
	center.appendChild(s);
	div2.appendChild(center);
	var i=document.createElement("h4");
	i.textContent="jagansrgdm@gmail.com";
	center.appendChild(i);
	div2.appendChild(center);
	var btn=document.createElement("button");
	btn.textContent="View Resume";
	btn.onclick=()=>{
		location.href='resume_symmetric.html';
	}
	center.appendChild(btn);
	div2.appendChild(center);
	div.appendChild(div2);
	main.appendChild(div);
