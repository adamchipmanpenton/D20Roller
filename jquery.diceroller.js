(function($) {
    $.fn.rollD20 = function() {
     
        return this.each(function() {
          
            let picNumber = 0
            let myVar = null
            let timer = 0
            let diceImage = $("<img>")
            let overlay = $("<div></div>");
            $(this).on("click", function() {
                timer = 0

            

                overlay.css({
                    
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


                $("body").append(overlay);


                diceImage.css({    

                    "position" : "absolute",
                    "top" : "37.5%",
                    "left" : "37.5%",
                    "width": "25%",
                    "text-align": "center",
                    
                    
                  /*  "display" : "block",             
                    "width": "25%",
                    "height": "25%",
                    "margin-left" : "auto",
                    "margin-right" : "auto",
                    "height" : "center"
                    */

                })

            
                $("body").append(diceImage);

                console.log("Test")

                myVar= setInterval(showPictures, 50)
            })

            function showPictures(){
                timer += 1

                console.log(timer)
               // picNumber= Math.floor(Math.random() * 20) + 1 ;
               picNumber = 20
                $(diceImage).attr("src", `pictures/${picNumber}.jpg`);

                if(timer == 50){
                    clearInterval(myVar)
                    displayNumber(picNumber)
                }
            }

            function displayNumber(picNumber){
                let imageCaption = $(`<h2>You rolled a ${picNumber}!!</h2>`);

                imageCaption.css({    

                    "position" : "absolute",
                    "top" : "40%",
                    "left" : "37.5%",
                    "width": "25%",
                    "text-align": "center",
                    "font-size" : "large",
                    "color" : "red"
                })

                $("body").append(imageCaption);
            }
        })
    }
}(jQuery))