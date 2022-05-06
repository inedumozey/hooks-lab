
const clickOpacity =(opacity)=>{

    const snap=(el)=>{

        const add = ()=>{
            if(el){
                el.style.opacity = (opacity ? opacity : .4)
            }
        }
    
        const remove = ()=>{
            if(el){
                el.style.opacity = 1
            }
        };

        return {
            onMouseDown: ()=>add(),
            onMouseUp: ()=>remove(),
            onMouseLeave: ()=>remove(),
        }
    }

    return { snap }



















        
}


export default clickOpacity