const BASE_URL =  'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json';
const dropDown = document.querySelectorAll(".dropDown select");
// for(let code in countryList)
// {
//     console.log(code,countryList[code]);
// }

for (let select of dropDown){
    for(let currCode in countryList){
        let newOption = document.createElement("option")
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "true";
        } else if (select.name === "to"  && currCode === "NPR"){
            newOption.selected = "true";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);//select lai target garyo
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

