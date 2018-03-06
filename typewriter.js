var i=0;

function typetext(i,elem)
{   
    timer = 50;
    var text=document.getElementById(elem).innerHTML;
    document.getElementById(elem).innerHTML ='';
    setInterval(type,timer);
    function type()
    {
        if(i<text.length)
        {
            document.getElementById(elem).innerHTML += text.charAt(i);
            i++;
        }   
    }i=0;   
}

window.addEventListener('load',typetext(i,'typetext'));

