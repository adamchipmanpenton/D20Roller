# jQuery D20 Dice Roller Plugin

jQuery plugin that allows the user to roll a twenty sided dice. An image window will pop up and cycle through random pictures of the dice and then stop. Showing what the user rolled. 

### Installation

Download jquery.diceroller.js file and the pictures file. 
Place them both in your folder for the website you are working on.

### Usage 

The plugin was made using jQuery 3.4.1. You will need to refer to jQuey and the  jquery.diceroller.js file in your html. Such as

```
<script src= "https://code.jquery.com/jquery-3.4.1.min.js" type = "text/javascript"></script>
<script src="jquery.diceroller.js" type="text/javascript"></script>
```

You will need to create a button on your webpage, it can be called anything, as long as if refereats to .rollD20({}); after it. 

## Options

Here is an example of options that you can change in the plugin. They are also the default values.

 
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
### background

Is the background color of the pop up.

### diceColor options 

Black
Green
Purple 
Red
Yellow

### diceCaption

This is what is displayed after the roll, saying what the value is. You can change the size, color, and type of the font. 

### diceImage

The picture of the dice as it is being rolled and after. You can change the size and color of the border to match your webpage. As well as the border radius. 
