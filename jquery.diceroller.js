(function($) {
    $.fn.rollD20 = function(options) {

        let settings = $.extend({
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
           diceColor : "red"
        }, options)

        return this.each(function() {
            let picNumber = 0
            let myVar = null
            let timer = 0
            let diceImage = $("<img>")
            let background = $("<div></div>");
            let closeButton = $("<img>");
            let showDiceNumber = null
            let diceColor = settings.diceColor
            const images = [
                `pictures/${diceColor}/1.jpg`,
                `pictures/${diceColor}/2.jpg`,
                `pictures/${diceColor}/3.jpg`,
                `pictures/${diceColor}/4.jpg`,
                `pictures/${diceColor}/5.jpg`,
                `pictures/${diceColor}/6.jpg`,
                `pictures/${diceColor}/7.jpg`,
                `pictures/${diceColor}/8.jpg`,
                `pictures/${diceColor}/9.jpg`,
                `pictures/${diceColor}/10.jpg`,
                `pictures/${diceColor}/11.jpg`,
                `pictures/${diceColor}/12.jpg`,
                `pictures/${diceColor}/13.jpg`,
                `pictures/${diceColor}/14.jpg`,
                `pictures/${diceColor}/15.jpg`,
                `pictures/${diceColor}/16.jpg`,
                `pictures/${diceColor}/17.jpg`,
                `pictures/${diceColor}/18.jpg`,
                `pictures/${diceColor}/19.jpg`,
                `pictures/${diceColor}/20.jpg`
            ]

            $(this).on("click", function() {
                timer = 0
                preload(images)
                show()
                addBackGround()
                addDicePic()
                myVar= setInterval(showPictures, 50)
            })

            function preload(images) {
                $(images).each(function () {
                    $('<img />').attr('src',this).appendTo('body').css('display','none');
                });
            }

            function show(){
                background.show()
                diceImage.show()
            }

            function addBackGround(){
                background.css({
                    "background-color": settings.background,
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
                    "border": settings.diceImage.border,
                    "border-radius": settings.diceImage.borderRadius
                })
                $("body").append(diceImage);
            }

            function showPictures(){
                timer += 1
                picNumber= Math.floor(Math.random() * 20) + 1 ;
                $(diceImage).attr("src", images[picNumber-1]);
                if(timer == 50){
                    clearInterval(myVar)
                    displayNumber(picNumber)
                }
            }

            function displayNumber(picNumber){
                exitButton()
                closeButton.show()
                if(picNumber == 1){
                    diceCaption = $(`<p>&#129324</p>`);
                }else if(picNumber == 20){
                    diceCaption = $(`<p>&#129321</p>`);
                }else{
                    diceCaption = $(`<h2>You rolled a ${picNumber}!!</h2>`);
                }
                diceCaption.css({    
                    "position" : "absolute",
                    "top" : "40%",
                    "left" : "37.5%",
                    "width": "25%",
                    "text-align": "center",
                    "font-size" : settings.diceCaption.fontsize,
                    "color" : settings.diceCaption.fontcolor,
                    "font-family": settings.diceCaption.fontFamily
                })
                $("body").append(diceCaption);
            }

            function exitButton(){
                let closeCss = {
                    "cursor": "pointer",
                    "width": "100px",
                    "height": "50px",
                    "position": "absolute",
                    "top": "20px",
                    "right": "20px",
                    "border": "0px",
                    "z-index": "1" 
                }
                closeButton.attr("src", "pictures/exitbutton.png");
                closeButton.css(closeCss);
                $("body").append(closeButton);
            }
            closeButton.on("click", function(){
                background.hide()
                diceImage.hide()
                closeButton.hide()
                diceCaption.hide()
            })
        })
    }
}(jQuery))
