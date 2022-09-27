function login(loginForm, e){
    e.preventDefault();
    if (loginForm.username.value && loginForm.password.value) 
    {
        var username = document.getElementById("username").value;
        // document.write('<html><body><h1><center>')
        document.write('<html><body><nav><a><aside>')
        document.write("Welcome" + " ");
        document.write(username);
        document.write('</aside></a></nav></body></html>')
    }
    else
    alert("Please enter your username");
}