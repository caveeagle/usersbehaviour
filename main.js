

function Page02init()
{
	var i = getCookie("id");
	
	if(i)
	{
	    document.getElementById("user_id").value = i;	
	}
}	

function Page02click(x,y)
{
    var i = document.getElementById("user_id").value;
    
    if(i.length<1)
    {
        alert("Введите идентификатор!");
        document.getElementById("user_id").focus();
        return false;
    }

    if(i.length==1)
    {
        alert("Слишком короткий идентификатор!");
        document.getElementById("user_id").focus();
        return false;
    }
    
    set_cookie("id",i);
    
    // ========================================== //
    
    var page_href = document.getElementById("button_2_href").href;
    
    location.href = page_href+'#'+x+'_'+y+'_'+i;
}

function Page01click(x,y)
{
	var i = getCookie("id");
	
	if(!i)
	{
	    i = "undef";	
	}
    
    var page_href = document.getElementById("button_1_href").href;
    
    location.href = page_href+'#'+x+'_'+y+'_'+i;
}

function Page03click(x,y)
{
	var i = getCookie("id");
	
	if(!i)
	{
	    i = "undef";	
	}
    
    var page_href = document.getElementById("button_3_href").href;
    
    location.href = page_href+'#'+x+'_'+y+'_'+i;
}

function Page03init()
{
   var N = 30;
   
   var fname = Math.floor(Math.random()*N)+1;
   
   if(fname<10)
   {
     fname = "0"+fname;
   }
   
   document.getElementById("gallery_image").src = "./images/A"+fname+".jpg";
}
