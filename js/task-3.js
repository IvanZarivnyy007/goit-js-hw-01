function getElementWidth(content,padding,border){
    const contentNamber = +content.slice(0, content.length-2)
    const borderNamber= +border.slice(0, border.length - 2)
    const paddingNamber= +padding.slice(0, padding.length - 2)
    const borderWidth = borderNamber * 2;
    const paddingWidth = paddingNamber * 2;
    const result = contentNamber+borderWidth+paddingWidth;
    
    return result
    
}

console.log(getElementWidth("50px", "8px", "4px"))
console.log(getElementWidth("60px", "12px", "8.5px"))
console.log(getElementWidth("200px", "0px", "0px"))


