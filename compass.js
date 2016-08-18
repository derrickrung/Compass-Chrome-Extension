$(document).ready(function() {
    findElementByText("91205");
    loopDom();
})


function findElementByText(text) {  
    var regex = "/\d{5}/g"
    var containsRegex = "*:contains('/\d{5}/g')"
        // var containsRegex = "*:contains(/\d{5}/g)"


    $(containsRegex).last().val(function(index, value) {
        let innerEl = this.innerHTML;
        let outterEl = this.outterHTML;
        console.log(innerEl)

        // $(currentEl).val(function(index, value) {
        //     console.log(value);
        // })

        $(this).append(`<a target="_blank" href="https://www.youtube.com/" class="compass-url"> <img class="pin-icon" src="pin_icon.png"></a>`);

    })
};

function loopDom() {  

	var items = document.getElementsByTagName("*");
for (var i = items.length; i--;) {
    //do stuff
    // console.log(items[i]);
    console.log($(items[i]).last());
}
    // var regex = "/\d{5}/g"
    // var containsRegex = "*:contains('/\d{5}/g')"
    //     // var containsRegex = "*:contains(/\d{5}/g)"


    // $(containsRegex).last().val(function(index, value) {
    //     let innerEl = this.innerHTML;
    //     let outterEl = this.outterHTML;
    //     console.log(innerEl)

    //     // $(currentEl).val(function(index, value) {
    //     //     console.log(value);
    //     // })

    //     $(this).append(`<a target="_blank" href="https://www.youtube.com/" class="compass-url"> <img class="pin-icon" src="pin_icon.png"></a>`);

    // })
};
