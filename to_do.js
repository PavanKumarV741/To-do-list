let count=0
function addlist(e){
    var inputjs=document.getElementById("custinput").value;
    if(inputjs.trim()===" "||inputjs.trim()===null){
        alert("enter the task");
        return false;
    }
    else{
        document.getElementById("custinput").value="";
    }
    let p=document.createElement("p");
    p.setAttribute("key",count)
    // console.log(count)
    p.innerText=inputjs;
    p.addEventListener("click",removeinputjs)
    count++
    var div=document.getElementById("mylists");
    div.appendChild(p);
}
function removeinputjs(e){
    let r=document.getElementById("mylists");
    r.removeChild(e.target)
}