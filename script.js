const btn = document.getElementById("res_btn");
const im1 = document.getElementById("im1");
const im2 = document.getElementById("im2");
const im3 = document.getElementById("im3");

let intervalHndl

btn.addEventListener("click",hndl_click);

function hndl_click()
{
	if(intervalHndl)
	{
		clearInterval(intervalHndl);
	}
	else
	{
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

