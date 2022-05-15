const useSnap = (opacity)=>{

    const snap=()=>{

        const add = (e)=>{
            if(e){
                e.currentTarget.style.opacity = (opacity ? opacity : .4)
            }
        }
    
        const remove = (e)=>{
            if(e){
                e.currentTarget.style.opacity = 1
            }
        };

        return {
            onMouseDown: (e)=>add(e),
            onMouseUp: (e)=>remove(e),
            onMouseLeave: (e)=>remove(e),
        }
    }
    
    return { snap }      
}

export default useSnap