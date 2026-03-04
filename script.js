const form = document.querySelector("#form");
const result = document.querySelector("#result");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const data = new FormData(form);
    let addition = 0;

    for(const n of data.values()){
        addition += Number(n);
    }

    result.textContent = `${addition}`;
})