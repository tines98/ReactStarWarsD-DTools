import React from 'react';
import "./InitiativeTracker.css"

export default props => {
  return (
    <div className="initiativeTracker">
      <table id="table" className="initiativeTable">
        <caption><b>STAR WARS 5E</b></caption>
        <th>Name</th>
        <th>Initiative</th>
        <th>Health</th>
        <th>Take Damage</th>
        <th>Delete</th>
      </table>
      <div className="buttonBoard">
        <button onClick={addUnitPrompt} className="addUnitButton">Add unit</button>
        <button onClick={nextTurn} className="nextButton">Next Turn</button>
      </div>
    </div>
  );
};

function removee(el) {
  var element = el;
  element.remove();
}

function addUnitPrompt(){
  var name = prompt("enter name");
  var value = parseInt(prompt("enter initiative"));
  var health = parseInt(prompt("enter health"));
  if (Number.isInteger(value) && Number.isInteger(health)){
    addUnit(name, value,health);
  }
  else{
    alert("not a number");
  }
}

function addUnit(name, initiative, health){
  var table = document.getElementById("table");
  var x = table.rows.length;
  if (x==0){
    insertUnit(0,name,initiative,health);
    return;
  }
  for (var i=0; i<x; i++){
    if (table.rows[i].cells[1].innerHTML < initiative){
      insertUnit(i,name,initiative,health);
      return;
    }
  }
  insertUnit(x,name,initiative,health);
}

function insertUnit(i,name, initiative, health){
  var table = document.getElementById("table");
  
  var row = table.insertRow(i);
  row.id = name;
  var cellName = row.insertCell(0);
  var cellInitiative = row.insertCell(1);
  var cellHealth = row.insertCell(2);
  var cellButton = row.insertCell(3);
  var cellDelete = row.insertCell(4);
  
  cellName.innerHTML = name;
  cellInitiative.innerHTML = initiative;
  cellHealth.innerHTML = health;

  var btn = document.createElement('input');
  btn.type = "button";
  btn.className = "btn";
  btn.value = "Take damage";
  btn.onclick = (function(name) {return function() {takeDamage(name);}})(name);
  cellButton.appendChild(btn);
  
  var btn2 = document.createElement('input');
  btn2.type = "button";
  btn2.className = "btn";
  btn2.value = "X";
  btn2.onclick = (function(name) {return function() {deleteUnit(name);}})(name);
  cellDelete.appendChild(btn2);
}

function deleteUnit(name){
  var unit = document.getElementById(name);
  unit.remove();
}

function takeDamage(i){
  var damage = parseInt(prompt("how much damage?"));
  if (Number.isInteger(damage)){
    var table = document.getElementById("table");
    if (table.rows[i].cells[2].innerHTML <= damage){
      table.deleteRow(i)
    }
    else {
      table.rows[i].cells[2].innerHTML -= damage;
    }
  }
  else {
    alert("not a number!");
  }
}

/*
function insertUnit(i,name, initiative){
  var table = document.getElementById("table");
  var row = table.insertRow(i);
  row.className = "unit";
  var cellName = row.insertCell(0);
  var cellInitiative = row.insertCell(1);
  var cellButton = row.insertCell(2);
  cellName.innerHTML = name;
  cellInitiative.innerHTML = initiative;
  cellButton = <button>Hello</button>;
}
*/
function nextTurn(){
  var table = document.getElementById("table");
  var length = table.rows.length;
  if (length==0){
    alert("no entries!");
  }
  var name = table.rows[0].cells[0].innerHTML;
  var initiative = table.rows[0].cells[1].innerHTML;
  var health = table.rows[0].cells[2].innerHTML
  insertUnit(length,name,initiative,health);
  table.deleteRow(0);
}
