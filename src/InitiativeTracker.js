import React from 'react';
import "./InitiativeTracker.css"

export default props => {
  return (
    <div className="initiativeTracker">
      <table id="table" className="initiativeTable"><caption>Turn order</caption></table>
      <button onClick={addUnitPrompt} className="addUnitButton">Add unit</button>
      <button onClick={nextTurn} className="nextButton">Next Turn</button>
    </div>
  );
};


function addUnitPrompt(){
  var name = prompt("enter name");
  var value = parseInt(prompt("enter initiative"));
  if (Number.isInteger(parseInt(value))){
    addUnit(name, value);
  }
  else{
    alert("not a number");
  }
}

function addUnit(name, initiative){
  var table = document.getElementById("table");
  var x = table.rows.length;
  if (x==0){
    insertUnit(0,name,initiative);
    return;
  }
  for (var i=0; i<x; i++){
    if (table.rows[i].cells[1].innerHTML < initiative){
      insertUnit(i,name,initiative);
      return;
    }
  }
  insertUnit(x,name,initiative);
}

function insertUnit(i,name, initiative){
  var table = document.getElementById("table");
  var row = table.insertRow(i);
  row.className = "unit";
  var cellName = row.insertCell(0);
  var cellInitiative = row.insertCell(1);
  cellName.innerHTML = name;
  cellInitiative.innerHTML = initiative;
}

function nextTurn(){
  var table = document.getElementById("table");
  var length = table.rows.length;
  var name = table.rows[0].cells[0].innerHTML;
  var initiative = table.rows[0].cells[1].innerHTML;
  insertUnit(length,name,initiative);
  table.deleteRow(0);
}
