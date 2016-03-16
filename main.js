

function Page02init()
{
	var i = getCookie("id");
	
	if(i)
	{
	    document.getElementById("user_id").value = i;	
	}
}	

function Page02click(page_href)
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
    
    location.href = page_href;
}
