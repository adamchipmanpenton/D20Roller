(function($) {
    $.fn.rollD20 = function() {
     

        return this.each(function() {
          
            let picNumber = 0
            let myVar = null
            let timer = 0
            let overLay = $("<img>")
            $(this).on("click", function() {
                
                overLay.css({    

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

                $("body").append(overLay);

                console.log("Test")

                myVar= setInterval(showPictures, 50)

              
            })
            
            

            function showPictures(){
                timer += 1

                console.log(timer)
                picNumber= Math.floor(Math.random() * 20) + 1 ;
                $(overLay).attr("src", `pictures/${picNumber}.jpg`);

                if(timer == 50){
                    clearInterval(myVar)
                    displayNumber(picNumber)
                }
            }


            function displayNumber(picNumber){
                let imageCaption = $(`<p>You rolled a ${picNumber}!!</p>`);

                imageCaption.css({    

                    "position" : "absolute",
                    "top" : "35%",
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