function formvalidate()
{
    var name=document.registration.name;
    var pass=document.registration.psd;
    var nlen = name.value.length;
    var plen= pass.value.length;
    var regex = /^[A-Za-z0-9 ]+$/
        var isValid = regex.test(document.getElementById("name").value);
if (nlen == 0 || nlen>30 || nlen<2)
{
alert("Name should not be empty or of length between 2 and 30");
name.focus();
return false;
}
if (/\d/.test(name.value)) {
    alert(name.value+' -Name should not contain a number');
    name.value = name.value.replace(/\d/gi, '');
    return false;
}
if(!isValid)
{
    alert("Name should not contain Special Characters.");
    name.value=name.value.replace(/\D/gi,'');
    return false;
}
if(plen == 0)
{
    alert("Password should not be empty");
pass.focus();
return false;
}
alert("Details submitted successfully")
return true;
}