document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.getElementById("pyramid-loader").style.visibility = "visible";
    } else {
        setTimeout(() => {
            document.getElementById("pyramid-loader").style.display ="none";
            document.querySelector("body").style.visibility = "visible";
        }, 5000)
    }
};


const form = document.getElementById('loginForm');

form.addEventListener('submit', async evt => {
    evt.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value,key)=>obj[key]=value)
    await fetch('/api/sessions/login', {
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            "Content-Type": 'application/json',
        }
    }).then(result => result.json()).then(json => {
        if (json.status === 'success') {
            console.log(json);
            localStorage.setItem('authToken', json.token)
            window.location.replace('/profile')
        }
    });
})

