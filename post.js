document.addEventListener("DOMContentLoaded", function() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            const Lists = document.getElementById("Lists");

            posts = posts.slice(0, 50);
            posts.forEach(post => {
                const li = document.createElement("li");
                li.textContent = post.title;
                li.setAttribute("data-id", post.id);
                li.addEventListener("click", function() {
                    const id = this.getAttribute("data-id");
                    console.log(id);
                    // window.location.href = "details.html?id=" + id;
                    window.location.href = `details.html?id=${id}`;
                    // window.location.href = 'details.html';
                });
                Lists.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching posts:", error));
});
