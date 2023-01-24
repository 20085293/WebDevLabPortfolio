/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello from the Web App Dev 1 lab");

const greenbtn = document.querySelector(".green");

greenbtn.addEventListener("click", () => alert("Thanks! You're okay too"));

const bluebtn = document.querySelector(".blue");

bluebtn.addEventListener("click", () => {
    let readMoreDiv = document.querySelector("#readmore");
    if (readMoreDiv.style.display === "block") 
    {
      readMoreDiv.style.display = "none";
    } 
  
  else 
  {
      readMoreDiv.style.display = "block";
    }
});

const redbtn = document.querySelector(".red");

redbtn.addEventListener("click", () => {
  let username = prompt("What's your name?");
  let welcomeUserDiv = document.querySelector("#welcomeuser");
  welcomeUserDiv.style.display = "block";
  document.querySelector("#welcomeuser").innerHTML 
    = `<p> Hello, ${username}, looking forward to hearing your playlists!
    Click this message to close it.</p>`;
  welcomeUserDiv.style.cursor = "pointer";
});

document.getElementById('welcomeuser').addEventListener("click",() => {
document.querySelector("#welcomeuser").style.display= 'none'});