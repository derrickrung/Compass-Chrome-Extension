$(document).ready(function() {
    // findElementByText("91205");
    loopDom();
})


// function findElementByText(text) {  
//     var regex = "/\d{5}/g"
//     var containsRegex = "*:contains('/\d{5}/g')"
//         // var containsRegex = "*:contains(/\d{5}/g)"


//     $(containsRegex).last().val(function(index, value) {
//         let innerEl = this.innerHTML;
//         let outterEl = this.outterHTML;
//         console.log(innerEl)

//         // $(currentEl).val(function(index, value) {
//         //     console.log(value);
//         // })

//         $(this).append(`<a target="_blank" href="https://www.youtube.com/" class="compass-url"> <img class="pin-icon" src="pin_icon.png"></a>`);

//     })
// };

function loopDom() {  
    var elements = document.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];
            if (node.nodeType === 3) {
                var text = node.nodeValue;
                console.log('text',text);
                console.log('element',element);
                $(element).append(`<a target="_blank" href="https://www.youtube.com/" class="compass-url"> <img class="pin-icon" src="pin_icon.png"></a>`);
            };
        };
    }

};
