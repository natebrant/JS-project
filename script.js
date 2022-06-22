var x = 0;

function run() {

    document.getElementById("test").style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","+Math.floor(Math.random() * 255)+")";
document.getElementById("test").style.height = (x+=.1)+"px";
    document.getElementById("test").style.width = (x+=.01)+"px";
     document.getElementById("test").style.marginTop = (x+=.1)+"px";
    document.getElementById("test").style.marginLeft = (x+=.1)+"px";
    document.getElementById("test").style.marginLeft = -(Math.floor(Math.random() * 50))+"px";
        document.getElementById("test").style.marginTop = -(Math.floor(Math.random() * 50))+"px";
    x+=1;
 
    setTimeout(run,100);
}