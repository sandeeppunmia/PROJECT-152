AFRAME.registerComponent("car",{
    schema:{
        modelRef:{type:"string",default:"./car/scene.gltf"}
    },

    init:function(){
        this.el.setAttribute("gltf-model",this.data.modelRef)
        const position={x:-35,y:10,z:80}
        const rotation={x:0,y:100,z:0}
        const scale={x:50,y:50,z:50}
        this.el.setAttribute("position",position)
        this.el.setAttribute("rotation",rotation)
        this.el.setAttribute("scale",scale)
    }
})