    // Login Page
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => {
                const user = users.find(user => user.username === username);
                
                if (user) {
                    if (password === "laverdad") {
                        window.location.href = "post.html";
                    } else {
                        alert("You're password is wrong!");
                    }
                } else {
                    alert("Username can't found!");
                }
            })
            .catch(error => alert("Error fetching users:", error));
    });