// The function to submit the data to the openai API
async function submitPrompt() {
    // Gets the values of the all the input boxes and compiles them 

    // Gets the users purpose in their inspection
    const purpose = document.getElementById("user-purpose-input").value;
    
    // Gets the amount of observation boxes used
    const observations = document.getElementById("observations-input").value

    // Gets the users logic behing the inspection
    const logic = document.getElementById("logic-input").value;

    // Grabs the users conclusion 
    const conclusion = document.getElementById("conclusion-input").value;

    // Puts everything collected above into a single string to pass to openai
    const totalInput = "Write an engineer paragraph based on the following: \n \nPurpose: \n"+purpose + "\n \nObservations: \n" + observations + "\n\nLogic: \n" + logic +
    "\n\nConclusion: \n" + conclusion + "\n\nParagraph:\n";

    const apiKey = document.getElementById("api-input").value

    // Gets the response from openai
    const response = await axios.post("https://api.openai.com/v1/engines/text-davinci-003/completions", {
        prompt: totalInput, // Input from user
        max_tokens:3500,
        temperature:1
    },
    {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiKey
        }
    });
    // Sets the text of response to openai's paragraph
    document.getElementById("response").innerHTML = response.data.choices[0].text;
}

function acquireAPI(){

}

// Main part of the program
window.onload = function(){

}
