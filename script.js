document.getElementById("btn").addEventListener("click", function(){


 async function fetchdata(){
    try{
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await res.json()
        console.log(data)
        document.getElementById("output").innerHTML = JSON.stringify(data,null,2)
    }
    catch(err){
        console.log("error", err)
    }

}
fetchdata()
})