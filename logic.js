async function getDefination() {
  let getWord = document.getElementById("word").value;
  console.log(getWord);
  let word = "https://api.dictionaryapi.dev/api/v2/entries/en/" + getWord;
  let response = await fetch(word);
  let data = await response.json();
  console.log(data);

  let definitions = "";
  data.forEach((entry) => {
    entry.meanings.forEach((meaning) => {
      meaning.definitions.forEach((definition) => {
        definitions += `${definition.definition}<br><hr>`;
      });
    });
  });

  document.getElementById("displayArea").innerHTML = definitions;
}
window.onload = function() {
  window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = "Are you sure you want to leave this page?";
    
    // Most browsers will use this message, but some might not
    e.returnValue = confirmationMessage;
    return confirmationMessage;
  });
};
