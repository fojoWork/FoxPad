function Save(){
    const typed = document.getElementById("textBox").value;
    try
    {
        localStorage.setItem("typed", typed);
    }
    catch(error)
    {
        console.error();
        
    }
    let save1 = document.getElementById("saved1");

    save1.innerHTML = typed;
}