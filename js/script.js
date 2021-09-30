function doSuggestionBox(text) { 
    var input = text; 
    if (input == "") {
        document.getElementsByClassName('suggest-box').style.visibility = "hidden"; 
    } else {
        document.getElementsByClassName('suggest-box').style.visibility = 'visible'; 
        doSuggestions(text);
    }
}

