const myFunction = document.getElementById('togglePassword');
const password = document.getElementById('password')
myFunction.addEventListener('click', function() {
    this.classList.toggle("fa-eye-slash")
    const type = password.getAttribute("type") === "password" ? "text" : "password"
    password.setAttribute("type", type)
});
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

