const zodiac=document.getElementById("zodiac");

const body=document.body;
const changecolor=()=>{
    switch(zodiac.value){
        case "aries":
            body.style.backgroundColor="red"
            break;
        case "Tauras":
            body.style.backgroundColor="blue"
            break;
        case "Gemini":
            body.style.backgroundColor="green"
            break;
        case "Cancer":
            body.style.backgroundColor="black"
            break;
        case "Leo":
            body.style.backgroundColor="purple"
            break;
        case "Virgo":
            body.style.backgroundColor="orange"
            break;
        case "Libra":
            body.style.backgroundColor="brown"
            break;
        case "Scorpio":
            body.style.backgroundColor="pink"
            break;
        case "Sagittarus":
            body.style.backgroundColor="yellow"
            break;
        case "Capricorn":
            body.style.backgroundColor="grey"
            break;
        case "Aquarius":
            body.style.backgroundColor="gold"
            break;
        case "Pisces":
            body.style.backgroundColor="silver"
            break;
         default:
            body.style.backgroundColor="white"   
        
    }
};