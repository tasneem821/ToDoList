let answer = document.getElementById('answer');
let tasksarr = []
function add(){
  let task = document.getElementById('task').value;

  tasksarr.push(task);
  answer.innerHTML="";
show();
  event.preventDefault()

}
function sortArray(){
  tasksarr.sort();
  answer.innerHTML="";
show();
  event.preventDefault();
}
function show(){
  for(var i=0;i<tasksarr.length;i++){
    answer.innerHTML+=`<li class="tasks"><span>${tasksarr[i]}</span>
    <input type="Submit"  id="delete" value="Delete" onclick="remove(${i})"></li>`
    }
}

function remove( index){
tasksarr.splice(index, 1);
event.preventDefault();
answer.innerHTML="";
show();
}
