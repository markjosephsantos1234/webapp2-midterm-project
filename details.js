document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            const Details = document.getElementById("Details");
            Details.innerHTML = `
                <h3>Title: ${post.title}</h3>
                <p>Body: ${post.body}</p>
            `;
        })
        .catch(error => console.error("Error fetching posts:", error));
});