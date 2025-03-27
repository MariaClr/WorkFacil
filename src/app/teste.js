async function teste(){
    const api = await fetch("http://localhost:2000/")
    const dados =await api.json();
    console.log(dados)
}

teste()