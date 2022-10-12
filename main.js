(function ()
{
    setTimeout(beforeLoading, 3000);
})()
function beforeLoading(){
    const skeletons = document.querySelectorAll(".skeleton");
    const texts = document.querySelectorAll(".hidden");
    skeletons.forEach(s => s.classList.add("hidden"));
    texts.forEach( e => e.classList.remove("hidden"));
}