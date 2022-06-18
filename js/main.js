const btn = document.getElementById('btn');
let allDo =[];
let index = 0;


const getData = () => {
    return document.getElementById('reminder').value;
}

const getData2 = () =>{
    return document.getElementById('selec').value
}

const createDoList = (reminder,selec) => {
    let doList = {};
    doList.reminder = reminder;
    doList.selec = selec;
    return doList;
}

const renderDoList = () =>{
    
    let doList = createDoList(getData(),getData2());
    allDo.push(doList);
    console.log(allDo);
    let container = document.getElementsByClassName('container_ul')[0];
    let container_il = document.createElement('li');
    container_il.classList.add('container_il');
    container_il.innerHTML = `
    ${allDo[index].reminder}
    <div class ="container_span">
    <span>Prioridad: ${allDo[index].selec}</span>
    <span class ="btn_edit" id ="btn_edit"><i class='bx bxs-pencil' ></i></span>
    <span class="btn_delete" id = "btn_delete"><i class='bx bxs-trash'></i></span>
    </div>
    
    `;
    container.appendChild(container_il);
    createBtnDelt();
    index++;
}

const deleteObj = () =>{
    allDo.splice(1,1);
    console.log(allDo);
}

const createBtnDelt = () =>{
    const btn_delete = document.getElementsByClassName('btn_delete')[index];
    btn_delete.addEventListener('click',deleteObj);
    console.log(btn_delete);
}

btn.addEventListener('click',renderDoList);
