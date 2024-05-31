let i = null;

i = '';

i = 0;
let msg = ['downloading DM,denuncia ativa, files, content from IP address = ','connecting to instagram.com server mainframe...byte packet size= ','@denunciando... '];

let hack = () =>{
i++;
  if(i < 3){
document.getElementById("output").innerHTML += msg[i]+i*Math.PI*Math.random()/3+"<hr>";}
  else{document.getElementById("output").innerHTML += msg[0]+` 127.0.0`+i*Math.PI*Math.random()/2+"<hr>";}
  
  
}

let output = () =>{
  setInterval(hack,6000*Math.random());
}