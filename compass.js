$(document).ready(function() {
    // findElementByText("91205");
    loopDom();
})


let imgURL = chrome.extension.getURL('pin_icon.png');

function loopDom() {
    let elements = document.getElementsByTagName('*');

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];

        for (let j = 0; j < element.childNodes.length; j++) {
            let node = element.childNodes[j];

            if (node.nodeType === 3) {
                let text = JSON.stringify(node.nodeValue);
                let found = text.search(/\d{5}/g);
                let stringd = text.slice(found, found + 5);
                
                if (found !== -1) {
                    if (zipHash[stringd]) {

                        let oString = element.innerHTML;
                        let newStr = oString.replace(/(<([^>]+)>)/ig, "");
                        newStr = newStr.replace(/\s/g, "+");
                        let founded = newStr.search(/\d{5}/g);
                        let str = newStr.slice(newStr.search(/\d/), founded + 5);

                        console.log(str);

                        $(element).append(`<a target="_blank" href=https://www.google.com/maps/place/` + str + ` class="compass-url"><img class="pin-icon" src="` + imgURL + `"></a>`);

                    }
                }
            };
        };
    }

};
