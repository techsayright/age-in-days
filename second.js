function cal() {

    let y = document.getElementById('check').value;
    console.log(y);
    if (y == 0 || null) {
        let logic = (2021 - y) * 365;
        console.log(logic);
        document.getElementById('answer').innerText = "[Sorry, You haven't entered Proper value]";
    }
    else if (y > 2021) {
        let logic = (2021 - y) * 365;
        console.log(logic);
        document.getElementById('answer').innerText = "[I think, You are an alien]";
    }
    else {

        let logic = (2021 - y) * 365;
        console.log(logic);
        document.getElementById('answer').innerText = "[You are " + logic + " Days Old.]";

    }
}

function deleted() {
    document.getElementById('answer').innerText = "Ans will come here";
}

