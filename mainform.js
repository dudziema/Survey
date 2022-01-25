// const projectName = 'pig-survey';

function submitForm(event) {
    // event.preventDefault()
    const form = document.getElementById('survey-form');
        if (form.checkValidity() == false) {
            var list = form.querySelectorAll(':invalid');
            list[0].focus();
            alert('Add missing information or correct data for valid format.')
        }else{
            showMessage(); 
        }
};
function showMessage(){
    const message =document.getElementById("winnerPig");
    message.style["visibility"]="visible";
    message.style["opacity"]="1";
    checkPig();
}
function checkPig() {
    let pigs = document.getElementsByName('pig');
    pigs.forEach((pig) => {
        if (pig.checked) {
            var pigName = pig.value;
            addPigName(pigName);
        }
    });
    

};

function addPigName(pigName){
    var span = document.getElementById("pigName");
    var text = document.createTextNode(pigName);
    span.appendChild(text);
    showPig(pigName);

}
function showPig(output){
    const img = document.createElement("img");
    const pigPhoto = document.getElementById('photoPig')
    img.src = "./images/"+output+".jpeg";
    img.width = 300;
    img.height=300;
    img.style="border-radius: 5%"
    img.class="winner-pig";
    pigPhoto.appendChild(img);
    
}


function closeMessage(event){
    // event.preventDefault()
    const message =document.getElementById("winnerPig");
    const span = document.getElementById("pigName");
    const pigPhoto = document.getElementById('photoPig');

    message.style["visibility"]="hidden";
    message.style["opacity"]="0";

    span.removeChild(span.childNodes[0]);
    pigPhoto.removeChild(pigPhoto.children[0]);
    
    resetForm();
}

function resetForm(){
    // window.scrollTo(0, 0);  
    // window.location.reload();

}