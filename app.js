const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const input = document.querySelector(".input");
const box = document.querySelector(".box");
const btn = document.querySelector(".get");
const btn1 = document.querySelector(".clr");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const data = input.value;
    getqrcode(data);
    
})
btn1.addEventListener("click",()=>{
    clr();
})

async function getqrcode(data){
    // console.log("featching");
    try {
        const res = await fetch(url+`${data}`);
        if(!res.ok){
            throw new error("network problem")
        }
        const img = res.url;
        // console.log(res);
        box.innerHTML = `<img src="${img}" alt="">`;
    } catch (error) {
        console.log(error)
    }
}
function clr(){
    box.innerHTML = "";
}