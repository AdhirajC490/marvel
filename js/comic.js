AFRAME.registerComponent("tour" , {
    init: function(){
        this.placesContainer = this.el
        this.createCards()
    },
    createCards: function(){
        const thumbnailsRef = [
            {
                id:"cap" , 
                title:"Captain-America",
                url:"./assests/thumbnails/Captain.jpg"
            },
            {
                id:"hulk" , 
                title:"Hulk",
                url:"./assests/thumbnails/Hulk.jpg"
            },
            {
                id:"Iron" , 
                title:"Iron-Man",
                url:"./assests/thumbnails/Iron.jpg"
            },
            {
                id:"spidey" , 
                title:"Spider-Man",
                url:"./assests/thumbnails/Spider.jpg"
            }
        ];
        let initialXposition = -60
        for(var item of thumbnailsRef){
            const posX = initialXposition+25
            const posY = 10
            const posZ = -40
            const pos = {x:posX , y:posY , z:posZ}
            initialXposition = posX

            const borderEl = this.createBorder(pos , item.id)
        }
        },

        createBorder:function(pos , id){
            const entityel = document.createElement("a-entity")
            entityel.setAttribute("id", id)
            entityel.setAttribute("visible" , true)
            entityel.setAttribute("geometry" , {
                primitive:"rectangle"

            })
        }

})