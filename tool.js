var stage = 1;
var left = document.getElementById("left");
var right = document.getElementById("right");

function newStage()
{
	var leftDiv = document.createElement("div");
	leftDiv.style.position = "relative";
	leftDiv.style.width = "500px";
	leftDiv.style.height = "500px";
	left.appendChild(leftDiv);
	var rightDiv = document.createElement("div");
	rightDiv.style.position = "relative";
	rightDiv.style.width = "500px";
	rightDiv.style.height = "500px";
	right.appendChild(rightDiv);
	
	for (var i = 0; i < stage*5; i++)
	{
		addImg(leftDiv,rightDiv);
	}
	
	addCorrectImg(leftDiv);
}

function addCorrectImg(node)
{
	var img = document.createElement("img");
	img.src = "smile.jpg";
	var imgTop = Math.floor(Math.random() * 440);
	var imgLeft = Math.floor(Math.random() * 440);
	
	img.style.position = "absolute";
	img.style.width = "60px";
	img.style.height = "60px";
	img.style.top = imgTop + "px";
	img.style.left = imgLeft  + "px";
	img.addEventListener("click", nextStage);
	node.appendChild(img);
}

function addImg(lNode, rNode)
{
	var img = document.createElement("img");
	img.src = "smile.jpg";
	
	var imgTop = Math.floor(Math.random() * 440);
	var imgLeft = Math.floor(Math.random() * 440);
	
	img.style.position = "absolute";
	img.style.width = "60px";
	img.style.height = "60px";
	img.style.top = imgTop + "px";
	img.style.left = imgLeft  + "px";
	img.addEventListener("click", gameOver);
	lNode.appendChild(img);
	rNode.appendChild(img.cloneNode(true));
}

function gameOver()
{
	alert("GAME OVER.\nYou clicked on wrong face! Please start again!");
	while (left.firstChild)
	left.removeChild(left.firstChild);
	while (right.firstChild)
	right.removeChild(right.firstChild);
	stage = 1;
	newStage();
}

function nextStage()
{
	stage++;
	while (left.firstChild)
	left.removeChild(left.firstChild);
	while (right.firstChild)
	right.removeChild(right.firstChild);
	newStage();
	
}
