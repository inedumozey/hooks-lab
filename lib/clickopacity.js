const clickopacity =(opacity)=>{

    const add = (el)=>{
        if(el){
            el.style.opacity = (opacity ? opacity : .5)
        }
    }

    const remove = (el)=>{
        if(el){
            el.style.opacity = 1
        }
    };

    return { add, remove }
}

export default clickopacity