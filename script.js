var x = 0;

function run() {

    document.getElementById("test").style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","+Math.floor(Math.random() * 255)+")";
    console.log("rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","+Math.floor(Math.random() * 255)+")");
    setTimeout(run,1);
}