// alert("hello");

// challenge1= your age in days
function ageinday() {

    // logic
    let birthyear = prompt("what is your Birth-year?");
    let ageinDays = (2021 - birthyear) * 365;

    // dom
    let h1 = document.createElement('h1');
    let text = document.createTextNode('You are ' + ageinDays + ' days old.');

    // this is my first logic
    if ((birthyear == 0) || (birthyear == null)) {
        text = document.createTextNode('Please! Enter your Birth-Year.');

    }

    h1.setAttribute('id', 'ans');
    h1.appendChild(text);
    document.getElementById('flex-box-result').appendChild(h1);


    console.log(ageinDays);


}


// this is my second logic

//     if (birthyear == 0 || birthyear== null) {
//         let h1 = document.createElement('h1');
//         let text = document.createTextNode('Please! Enter your Birth-Year.');
//         h1.setAttribute('id', 'ans');
//         h1.appendChild(text);
//         document.getElementById('flex-box-result').appendChild(h1);

//     }
//     else {

//         // dom
//         let h1 = document.createElement('h1');
//         let text = document.createTextNode('You are ' + ageinDays + ' days old.');
//         h1.setAttribute('id', 'ans');
//         h1.appendChild(text);
//         document.getElementById('flex-box-result').appendChild(h1);

//         console.log(ageinDays);
//     }

// }

function reset() {

    // document.getElementById('ans').innerHTML = '';
    document.getElementById('ans').remove();
}
