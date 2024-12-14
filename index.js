function func(){
    var email=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    if(email == "EntriElevate@gmail.com"&&pass == "admin123")
    {
        alert("Login Successfully!!! WELCOME")
        window.location.assign("homepage.html")
    }
    else
    {
        alert("Login Failed invalid")
    }
}
function forg()
{
    let forg=prompt("Enter the email ")
    
    let n1=document.getElementById("forget").value
    
    if(forg == "EntriElevate")
    (
        alert("Verification Code Send to your Email")
    )
    else
    {
        alert(" Invalid Email")
    }
}  