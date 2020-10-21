console.log('Hey,there');
let addBtn = document.getElementById('add-btn');
let notesObj = [];
showNotes();
addBtn.addEventListener('click',function(){
    let addTxt = document.getElementById("add-txt").value;
    let notes = localStorage.getItem("notes");
    
    // if(notes == null)
    // {
    //     notesObj = [];
    //     console.log('hi');
    // }
    // else{
    //     notesObj = JSON.parse(notes);
    // }
    if(addTxt.length<3)
    {
        alert('Invalid Field');
    }
    else{

    
    if(notes!=null){

        notesObj = JSON.parse(notes);
    }
    
    notesObj.push(addTxt);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    console.log(notesObj);
    addTxt = document.getElementById("add-txt").value = null;
    showNotes();
}
});
function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes!=null)
    {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element,index){
        html += `
        <div class="noteCard my-2 mx-3 card" style="width: 18rem;">

                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text" id="card-txt">${element}</p>
                    <button id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Remove</button>
                </div>
            </div>
        `
    });
    let notesElm = document.getElementById('notes');
    if(notesObj.length!=0)
    {

        notesElm.innerHTML = html;
    }
    else{
       notesElm.innerHTML = "Nothing To Show RIGHT NOW. Enter the field"
    }
}
function deleteNote(index){
    console.log('Im deleting this',index);
    let notes = localStorage.getItem("notes");
    if(notes!=0)
    {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}