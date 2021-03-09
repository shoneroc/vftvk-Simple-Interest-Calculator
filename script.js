function compute()
{
    p = document.getElementById("principal").value;
    var principal = p;
    
    q = document.getElementById("rate").value;
    var rate = q;
    
    m = document.getElementById("years").value;
    var years = m;
    
    var interest = (principal*years*rate)/100;
    
    var d = new.Date();
    var future_years = m+d.getFullYear();
    
    
    
    
}

function read_span()
{
  s = document.getElementByID("rate").value;
  var slider = document.getElementByID("result");
    slider.innerHTML = s.value;
    
    s.onchange=
    
    
    
}
