window.addEventListener("load", () => {
  const URL = "https://run.mocky.io/v3/adea5f4c-64fb-49d8-a87f-db0dc33d0c1b";
  const content = document.querySelector("#content");

  loading();

  axios
    .get(URL)
    .then((response) => {
      const posts = response.data;
      insertPosts(posts);
    })
    .catch(() => {
      error();
    });

  function loading() {
    content.innerHTML = `
      <div class="w-100 d-flex align-items-center justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

      `;
  }

  function insertPosts(posts) {
    let cards = "";

    posts.forEach((post) => {
      cards += `
        <div class="col" id="post-${post.id}">
        <div class="card shadow-sm">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
              Thumbnail
            </text>
          </svg>

          <div class="card-body">
            <p class="card-text">${post.content}            
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
        `;
    });
    content.innerHTML = cards;
  }

  function error() {
    content.innerHTML = `
<div class=" w-100 text-center alert-danger" role="alert">
Could not fetch posts...
</div>

`;
  }
});
