AFRAME.registerComponent("move-right",{
    schema:{
        moveX:{type:"number",default:0}
    },
    tick:function(){
        window.addEventListener("click",(e)=>{
            this.data.moveX = this.data.moveX + 0.005
        })
        var pos = this.el.getAttribute("position")
        pos.x = pos.x +this.data.moveX
        this.el.setAttribute("position",{
            x:pos.x,
            y:pos.y,
            z:pos.z
        })
    },
    update:function(){
        window.addEventListener("click",(e)=>{
            this.data.clickCounter = this.data.clickCounter + 1;
            if(this.data.clickCounter === 1){
                const rotation = {x:0,y:20,z:0};
                this.el.setAttribute("rotation",rotation);
            }
            else if(this.data.clickCounter === 2){
                const rotation = {x:0,y:100,z:0};
                this.el.setAttribute("rotation",rotation)
            }
        })
    }
})