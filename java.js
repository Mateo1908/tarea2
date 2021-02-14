var ma=["Diego","Maria","Jorge","Ana"];
console.log(ma);

var si=function()
{
	var r=0;
	var nom=document.getElementById("nom").value;
	var ul=ma.length-1; 
	while(r<ma.length)
	{
		if(nom==ma[r])
		{
			var ult=ma[ul];
			ma[ul]=ma[r];
			ma[r]=ma;
			ma.pop();
			console.log(ma);
			r=ma.length;
			document.getElementById("re").value="Eliminado de forma correcta";
			document.getElementById("nom").value="";
		}
		else
		{
			r=r+1;
			if (nom!=ma[r])
			{
				document.getElementById("re").value=nom+" no se encuentra en el vector";
			}
		}
	}
}

var ing=function()
{
	var nombi=document.getElementById("nombi").value;
	ma.push(nombi);
	console.log(ma);
	document.getElementById("nombi").value="";
}