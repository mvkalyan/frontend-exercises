function time(){
    setInterval(()=>{
        let today=new Date();
        let time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
        document.getElementById("time").innerHTML="<h1>"+time+"</h1>";
    },1000)
}
time();

function changeBack(){
    setInterval(()=>{
        let r=Math.floor(Math.random() * 256);
        let g=Math.floor(Math.random() * 256);
        let b=Math.floor(Math.random() * 256);
        document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
    },400)
}
changeBack();