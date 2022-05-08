AFRAME.registerComponent("cursor-listener",{

    schema:{
        selectedItemId:{default:"",type:"string"}
        },

    init:function(){
        this.handleMouseEnterEvent()
        this.handleMouseLeaveEvents()
    },


    handleMouseEnterEvent:function(){
        this.el.addEventListener("mouseenter",()=>{
            const id=this.el.getAttribute("id")
            const comicId=["captain-aero","outer-space","spiderman","superman"]

            if(comicId.includes(id)){
                const comicContainer=document.querySelector("#posterContainer")
                comicContainer.setAttribute("cursor-listener",{
                    selectedItemId:id
                })
                this.el.setAttribute("material",{
                    color:"#360087",
                    opacity:1
                })
            }
        })
    },

    handleMouseLeaveEvents: function () {
        // Mouse Leave Events
        this.el.addEventListener("mouseleave", () => {
          const { selectedItemId } = this.data;
          if (selectedItemId) {
            const el = document.querySelector(`#${selectedItemId}`);
            const id = el.getAttribute("id");
            if (id == selectedItemId) {
              el.setAttribute("material", { color: "#fff" });
            }
          }
        });
      },
})