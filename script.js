const btn = document.getElementById("res_btn");
const im1 = document.getElementById("im1");
const im2 = document.getElementById("im2");
const im3 = document.getElementById("im3");

let intervalHndl;
let clicked=0;

btn.addEventListener("dblclick",hndl_click);

function hndl_click()
{
	if(clicked==1)
	{
		clicked=0;
		clearInterval(intervalHndl);
	}
	else
	{
		clicked=1;
		intervalHndl = setInterval(slide,3000);
	}
}

function slide()
{
	const aux = im3.src;
	im3.src=im2.src;
	im2.src=im1.src;
	im1.src=aux;
}

