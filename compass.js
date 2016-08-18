$(document).ready(function() {
    // findElementByText("91205");
    loopDom();
})



var imgURL = chrome.extension.getURL('pin_icon.png');

function loopDom() {  
    var elements = document.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];
            if (node.nodeType === 3) {
                var text = JSON.stringify(node.nodeValue);
                var justText = node.nodeValue;
                var found = text.search(/\d{5}/g);
                var stringd = text.slice(found, found + 5)
                if(found !== -1){
                console.log(stringd, element)
                console.log(justText);
                $(element).append(`<a target="_blank" href="https://www.youtube.com/" class="compass-url"><img class="pin-icon" src="` + imgURL + `"></a>`);
            	}
            };
        };
    }

};