//argument is array like object, but it is not an array,it can convert to array
function Arguments(FirstName){
    let FullName="";
    for(let i=0;i<arguments.length;i++){
        let name;
        name=arguments[i];
        FullName=FullName+" "+name;
    }
    
    return FullName;
}
console.log(Arguments('abu','Shadat','shaikat'));