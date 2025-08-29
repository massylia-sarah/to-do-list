
const title0 = document.getElementById("title");
const userName0 =sessionStorage.getItem("userNameStorage") || "Guest";

title0.textContent = "Welcome "+ userName0;


const taskDiv0 = document.getElementById("taskDiv");
const btn0 = document.getElementById("addBtn");
let newTask = document.getElementById("Task");
taskDiv0.style.display= "none";
tmp=""

let tasksDone = 0;

const ul = document.getElementById ("tasksList");

function switchBtn (){
    if (taskDiv0.style.display === "none"){
        taskDiv0.style.display = "block";
        btn0.textContent = "confirm";
    }else{
        btn0.textContent = "add task";
        tmp = newTask.value;
        newTask.value = "";
        taskDiv0.style.display =  "none"
        console.log(tmp);

        // about the list:
       addToTheList(tmp);
    }

}


function addToTheList (tmp){
 if (tmp != ""){
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.textContent = tmp;

            const btn1 = document.createElement("button");
            btn1.textContent = "Done";
            btn1.onclick = function() { markDone(li,btn1); };


            const btn2 = document.createElement("button");
            btn2.textContent = "delete";
            btn2.onclick = function() { deleteFunc(li); };

            li.appendChild(p);
            li.appendChild(btn1);
            li.appendChild(btn2);

            ul.appendChild(li);
        }
}

function markDone(li,randomButton){
    li.querySelector("p").style.textDecoration = "line-through";
    randomButton.disabled = true;
    tasksDone++;
    paragraph.textContent = "you accomplished "+ tasksDone +" tasks";
}

function deleteFunc(li){
    li.remove(); 
}

const paragraph = document.getElementById("score");
paragraph.textContent = "you accomplished "+ tasksDone +" tasks";
