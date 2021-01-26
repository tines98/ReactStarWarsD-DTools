import React from 'react';
import "./DiceRoll.css"

export default props => {
  return (
    <div className="diceroller">
        <h4>Dice Roller</h4>
        <label for="quantity"></label>
        <input type="number" id="quantity" name="quantity" min="1" max="9" defaultValue="1"></input>

        <label for="dice"></label>
        <select name="dice" id="dice">
            <option value="4">d4</option>
            <option value="6">d6</option>
            <option value="8">d8</option>
            <option value="10">d10</option>
            <option value="12">d12</option>
            <option value="20">d20</option>
            <option value="100">d100</option>
        </select>
        <button onClick={roll}>Roll!</button>
        <h4>You got: </h4>
        <h3 id="result"></h3>
    </div>
  );
};


function roll(){
    var quantity = document.getElementById('quantity').value
    var dice = document.getElementById('dice').value
    var result = 0;
    for (var i=0; i<quantity; i++){
      result += Math.floor(Math.random()*parseInt(dice) + 1);
    }
    document.getElementById("result").textContent=result;
  }