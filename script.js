<script>
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
    var future_years = d.getFullYear() + years;
    
    
    
    
}


function myFunction() {
    var x = document.getElementById("rate").value;
    document.getElementById("Rate").innerHTML = x;
}
</script>
