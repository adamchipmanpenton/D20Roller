(function($) {
    $.fn.rollD20 = function() {
     
        return this.each(function() {
          
            let picNumber = 0
            let myVar = null
            let timer = 0
            
            let diceImage = $("<img>")
            let background = $("<div></div>");
            let closeButton = $("<img>");
            let imageCaption = null
        

            const images = [
                "pictures/1.jpg",
                "pictures/2.jpg",
                "pictures/3.jpg",
                "pictures/4.jpg",
                "pictures/5.jpg",
                "pictures/6.jpg",
                "pictures/7.jpg",
                "pictures/8.jpg",
                "pictures/9.jpg",
                "pictures/10.jpg",
                "pictures/11.jpg",
                "pictures/12.jpg",
                "pictures/13.jpg",
                "pictures/14.jpg",
                "pictures/15.jpg",
                "pictures/16.jpg",
                "pictures/18.jpg",
                "pictures/19.jpg",
                "pictures/20.jpg"
                ]

            $(this).on("click", function() {

                show()
                timer = 0

                //Trying to preload Images
                for (let image of images) {
                    image = new Image();
                }
                
                addBackGround()
                addDicePic()
                exitButton()
                myVar= setInterval(showPictures, 50)
            })

            function show(){
                background.show()
                diceImage.show()
                closeButton.show()
            }

            function addBackGround(){
                background.css({
                    "background-color": "grey",
                    "position": "absolute",
                    "top": "0px",
                    "left": "0px",
                    "text-align": "center",
                    "width": "100%",
                    "height": "100%",
                    "padding-top": "5%",
                    "opacity": "0.5"
                })
                $("body").append(background);
            }

            function addDicePic(){
                diceImage.css({    
                    "position" : "absolute",
                    "top" : "37.5%",
                    "left" : "37.5%",
                    "width": "25%",
                    "text-align": "center"
                })
                $("body").append(diceImage);
            }

            function showPictures(){

                timer += 1
                picNumber= Math.floor(Math.random() * 20) + 1 ;
                console.log(picNumber)
                $(diceImage).attr("src", `pictures/${picNumber}.jpg`);
                //$(diceImage).attr("src", images[picNumber-1]);

                if(timer == 50){
                    clearInterval(myVar)
                    displayNumber(picNumber)
                }
            }

            function displayNumber(picNumber){
                imageCaption = $(`<h2>You rolled a ${picNumber}!!</h2>`);
                imageCaption.css({    
                    "position" : "absolute",
                    "top" : "40%",
                    "left" : "37.5%",
                    "width": "25%",
                    "text-align": "center",
                    "font-size" : "large",
                    "color" : "black"
                })
                $("body").append(imageCaption);
            }

            function exitButton(){
                let closeCss = {
                    "color": "white",
                    "cursor": "pointer",
                    "width": "100px",
                    "height": "50px",
                    "position": "absolute",
                    "top": "20px",
                    "right": "20px",
                    "border": "0px",
                    "z-index": "1" 
                }
                closeButton.attr("src", "exitbutton2.png");
                closeButton.css(closeCss);
                $("body").append(closeButton);
            }

            closeButton.on("click", function(){
                background.hide()
                diceImage.hide()
                closeButton.hide()
                imageCaption.hide()
            })
        })
    }
}(jQuery))