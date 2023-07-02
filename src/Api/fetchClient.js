export const setContactForm  = async (e) =>fetch('https://jsonplaceholder.typicode.com/posts',{
    
    method:"GET",
    body:JSON.stringify(e),
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",   
    },
}
).then((res)=>{
    return res.json()
})