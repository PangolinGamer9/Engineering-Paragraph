// The function to submit the data to the openai API
async function submitPrompt() {
    const purpose = document.getElementById("user-input").value;
    const selectedValue = document.getElementById("amount-of-observations").value
    let observations = ''
    for (let i = 1; i < parseInt(selectedValue)+1; i++){
        let input = document.getElementById('input'+i)
        observations = observations + input.value + "\n"
    }
    const logic = document.getElementById("logic-input").value;
    const conclusion = document.getElementById("conclusion-input").value;

    const totalInput = "Write an engineer paragraph based on the following: \n \nPurpose: "+purpose + "\n \nObservations: \n" + observations + "\n\nLogic: " + logic +
    "\n\nConclusion: " + conclusion + "\n\nParagraph:\n";

    console.log(totalInput)

    const response = await axios.post("https://api.openai.com/v1/engines/text-davinci-003/completions", {
        prompt: totalInput, // Input from user
        max_tokens:3500,
        temperature:0
    },
    {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        }
    });
    document.getElementById("response").innerHTML = response.data.choices[0].text;
}
  
window.onload = function(){
    // Main part of the program
  

    const observationsDropdown = document.getElementById("amount-of-observations");
    observationsDropdown.addEventListener('change', function() {
        let divide = document.getElementById("observe-inputs")
        divide.innerHTML = ''
        let observeLabel = document.createElement('label');
        observeLabel.innerHTML = "Enter your observations: "
        observeLabel.style.position = "absolute"
        observeLabel.style.top = "100px"
        let parent = document.getElementById("observe-inputs");
        parent.appendChild(observeLabel);
        let selectedValue = observationsDropdown.value;
        
        for (let i = 1; i < parseInt(selectedValue)+1; i++){
            let input = document.createElement("input");
            input.id = "input"+i;
            input.style.position = "absolute";
            input.style.top = (90+(i*30))+"px";
            parent.appendChild(input);
        }

        let logic = document.getElementById("logic");
        logic.style.top = (150+((parseInt(selectedValue)+1)*30))+"px";
        let conclusion = document.getElementById("conclusion");
        conclusion.style.top = (200+((parseInt(selectedValue)+1)*30))+"px";
    });
    

}
