# jQuery D20 Dice Roller Plugin

jQuery plugin that allows the user to roll a twenty sided dice. An image window will pop up and cycle through random pictures of the dice and then stop. Showing what the user rolled. 

### Installation

Download jquery.diceroller.js file and the pictures file. 
Place them both in your folder for the website you are working on.

### Usage 

The plugin was made using jQuery 3.4.1.

You will need to create a button on your webpage, it can be called anything, as long as if refereats to .rollD20({}); after it. 

Here is an example of options that you can change in the plugin. They are also the default values. The diceColor options are black, green, purple, red, yellow.
The diceCaption is what is displayed after the roll, saying what the value is. You can change the size, color, and type of the font. 

 
```
$("#rollD20").rollD20({
    background : "grey",
    diceImage :{
        border: "2px solid black",
        borderRadius : "20px"
    },
    diceCaption: {
        fontsize : "100%",
        fontcolor : "black",
        fontFamily: "Times New Roman"
    },
  
});
```
