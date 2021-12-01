# jQuery D20 Dice Roller Plugin

jQuery plugin that allows the user to roll a twenty sided dice. An image window will pop up and cycle through random pictures of the dice and then stop. Showing what the user rolled. 

### Installation

Download jquery.diceroller.js file and the pictures file. 
Place them both in your folder for the website you are working on.

### Usage 

Here is an example of options that you can change in the plugin. They are also the default values. The diceColor options are black, green, purple, red, yellow.
 
```
$("#rollD20").rollD20({
        background : "grey",
        diceImage :{
            border: "2px solid black",
            borderRadius : "20px"
        },
        showDiceNumber: {
            fontsize : "100%",
            fontcolor : "black",
            fontFamily: "Times New Roman"
        },
       diceColor : "red"
});
```
