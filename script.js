let speech=new SpeechSynthesisUtterance();

let voices=[]
let voiceSelect=document.querySelector('select');


document.querySelector("button").addEventListener('click',()=>{
    speech.text=document.querySelector('textarea').value;
    if(speech.text===''){
        document.querySelector(".show-error").style.display="flex";
    }

    else{
        window.speechSynthesis.speak(speech);
    }
   
})
document.querySelector('textarea').addEventListener('click', () => {
    document.querySelector(".show-error").style.display = "none"; 
    // Remove error class
});


window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice= voices[0];  //bydefault lang..

 voices.forEach((voice, i)=>(voiceSelect.options[i]= new Option(voice.name, i)));
}

voiceSelect.addEventListener('change',()=>{
    speech.voice=voices[voiceSelect.value];
})
