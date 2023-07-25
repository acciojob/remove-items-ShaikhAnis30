//your JS code here. If required.
let options = document.getElementsByTagName("option");
// for (let i = 0; i < options.length; i++) {
//     console.log(options[i].innerText)
// }

const execute = () => {
    if(options[0].selected) {
        options[0].remove();
    }else if (options[1].selected) {
        options[1].remove();
    }else if (options[2].selected) {
        options[2].remove();
    }else if (options[3].selected) {
        options[3].remove();
    }else return;
}