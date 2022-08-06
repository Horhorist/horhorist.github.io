
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})

//open-terminal

async function open_terminal(){
  createText("Welcome to mu-ha-berHat🐝"); 
  await delay(700); //standby time
  createText("I'm student and web developer");
  await delay(1500);
  createText("Thanks for visiting my portfolio. Have a great day ahead!(ಠ_ಠ)━☆ﾟ.*･｡ﾟ")
  await delay(700);
  createText("You can run several commands:");

 
  createCode("all", "See all commands.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/horhorik";//terminal name
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}
//command
async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "all"){
    trueValue(value);
    
    createText("about", " About Me.");
    createText("social -a");
    createText("clear");
    createText("Languages")
    
  }
  //about me
  else if(value === "about"){
    trueValue(value);
    createText("Hi, I'm Horhorik")
    createText("An developer from somewhere in the earth. I like to code web applications and games. I have worked on many projects in my past, Some of my open source projects are pinned below make sure to check them out.")
  }
  


  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/horhorist' target='_blank'><i class='fab fa-github white'></i> github.com/horhorist</a>")
  }

  else if(value === "languages"){
    trueValue(value);
    
    createCode("Kurdish", ":)");
    createCode("Turkish", ":)");
    createCode("English", ":)");
    createCode("Python", "60%");
    createCode("Html", "95");
    createCode("Css", "95%");
    createCode("Javascipt","  65%")
    createCode("Php", "55%");
    createCode("Golang", "%50 [learning]");
    createCode("Flutter", "[learning]");

    
  }
   



  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}
 

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();

//bee
const wrapper = document.querySelector(".wrapper"),
    header = wrapper.querySelector("header");

function onDrag({movementX, movementY}) {
    let getStyle = window.getComputedStyle(wrapper);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    wrapper.style.left = `${leftVal + movementX}px`;
    wrapper.style.top = `${topVal + movementY}px`;
}

header.addEventListener("mousedown", () => {
    header.classList.add("active");
    header.addEventListener("mousemove", onDrag);
});
document.addEventListener("mouseup", () => {
    header.classList.remove("active");
    header.removeEventListener("mousemove", onDrag);
});
