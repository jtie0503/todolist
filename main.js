let input = document.querySelector('#taskInput');
let btn = document.querySelector('.btn');
let list = JSON.parse(localStorage.getItem('daily-list')) || [];
let ul = document.querySelector('.daily-list');

// function para mag-render ng list
function renderList() {
  ul.innerHTML = "";
  list.forEach(function(item){
    let li = document.createElement('li');
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.appendChild(document.createTextNode(item));

    // delete icon (image)
    let del = document.createElement("img");
    del.src = "IMG/delete.png";
    del.alt = "Delete";
    del.width = 20;
    del.style.cursor = "pointer";
    del.style.marginLeft = "10px"; 


    del.addEventListener("click", function(){
      list = list.filter(function(x){ return x !== item });
      localStorage.setItem('daily-list', JSON.stringify(list));
      renderList(); // refresh ul, hindi na kailangan ng location.reload
    });

    li.appendChild(del);
    ul.appendChild(li);
  });
}

//first renderlocalStorage
renderList();

btn.addEventListener("click", function(){
  if (input.value.trim() !== "") { 
    list.push(input.value);
    localStorage.setItem('daily-list', JSON.stringify(list));
    renderList();
    input.value = ""; // clear input after add
  }
});
