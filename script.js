const createNoteButton = document.getElementById("createNote") ;
const textArea = document.getElementById("writeNote") ;
const deleteButton = document.getElementById("deleteImg") ;
const container = document.getElementById("container") ;

// document.body.style.height = `${max("100vh" , "100%")}` ;

getData() ;

createNoteButton.addEventListener("click",createNewNote) ;
container.addEventListener("click",deleteNote) ;
// document.querySelectorAll(".note").addEventListener("keypress",()=>{
//     saveData() ;
// })
// document.querySelectorAll(".note").forEach((child, index) => {
//     // Save each div's content to localStorage
//     console.log(child)
//     child.addEventListener("keypress",()=>{
//         console.log("first")
//         saveData() ;
//     })
// });


function createNewNote(){
    // console.log("clicked");
    let newNoteDiv = document.createElement("div") ;
    let newNoteTextarea = document.createElement("textarea") ;
    let newNoteButton = document.createElement("button") ;
    newNoteTextarea.placeholder = "type your notes here..."

    // let newNoteDeleteImg = document.createElement("img") ;
    newNoteButton.innerHTML = `<img src="images/images/delete.png" alt="deleteImg">` ;
    // newNoteDeleteImg.src = "images/images/delete.png";
    newNoteDiv.classList.add("note") ;
    // newNoteDiv.classList.add("container") ;

    // newNoteButton.appendChild(newNoteDeleteImg) ;
    newNoteDiv.appendChild(newNoteButton) ;
    newNoteDiv.appendChild(newNoteTextarea) ;

    container.appendChild(newNoteDiv);
    // saveData() ; 

    // console.log(container.);
}

function deleteNote(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.parentElement.remove() ;
        localStorage.clear();
        saveData() ;
    }
    else if (e.target.tagName === "TEXTAREA"){
        console.log("first")
        saveData() ;
    }
}

function saveData(){

    console.log("_____________________");
    document.querySelectorAll(".note").forEach((child, index) => {
        // Save each div's content to localStorage
        console.log(child.children[1].value);
        localStorage.setItem(`div_${index}`, child.children[1].value);
    });
}
function getData(){
    
    for(let i=0 ; i<localStorage.length ; i++){
        
        const key = localStorage.key(i) ;
        if(key.startsWith("div_")){
            
            console.log(localStorage.getItem(key));
            
            let newNoteDiv = document.createElement("div") ;
            let newNoteTextarea = document.createElement("textarea") ;
            let newNoteButton = document.createElement("button") ;
            newNoteTextarea.value = localStorage.getItem(key) ;
            newNoteButton.innerHTML = `<img src="images/images/delete.png" alt="deleteImg">` ;
            newNoteDiv.classList.add("note") ;
            newNoteDiv.appendChild(newNoteButton) ;
            newNoteDiv.appendChild(newNoteTextarea) ;

            container.appendChild(newNoteDiv);

        }
 
    }
}
