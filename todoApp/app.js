const addButton = document.querySelector("#add");
//for localStorage
const updateLocalData = () =>{
    const textAreaData = document.querySelectorAll('textarea')
    const notes =[];
    textAreaData.forEach((note)=>{
        return notes.push(note.value)
    })
    console.log(notes); // return array of textarea
    //localstorage working
    //local storage hamesha string leta hai
    //agr array ya object save krana hoto phr JSON.stringify() use krte hain

    localStorage.setItem('notes', JSON.stringify(notes)); //data local storage me save hogaya hai ab use get neechy krengay
}



//text ko is lye lia k main div aur textarea me se kisi b ko hidden kr saken
const addnote = (text = '') => {
    
    const note = document.createElement('div')
    note.classList.add('note')
    const htmlData = `
    <div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="textarea ${text ? "hidden" : ""}"></textarea>
   
    `;
    //insertAdjacentHTML note k div me htmlData ko put krdega
    note.insertAdjacentHTML('afterbegin',htmlData)
   
   
   
    //getting the reference
    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('.textarea');


    //deleting the note
    deleteBtn.addEventListener('click', () =>{
        note.remove();
    })

// console.log(text);
    //edit the note: 1 baar save k lye 1 baar edit k lye
    //toggle: on ya off k lye use hota hai
    textArea.value = text;
    mainDiv.innerHTML = text;
    editBtn.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })
    textArea.addEventListener('change', (event) =>{
        const value = event.target.value;
        mainDiv.innerHTML = value
        // console.log(value); 

        updateLocalData();
    })

    document.body.appendChild(note)
    // console.log(note);
}

//localstorage k data ko get krne k lye start
const notes = JSON.parse(localStorage.getItem('notes'));
if(notes){
    notes.forEach((note) => addnote(note) )
}
//localstorage k data ko get krne k lye end

addButton.addEventListener('click',()=> addnote())