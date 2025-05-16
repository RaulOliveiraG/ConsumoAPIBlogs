const postsContainer = document.getElementById('posts');

fetch('https://api-fake-blog.onrender.com/postagens/')
  .then(res => res.json())
  .then(posts => {
    postsContainer.innerHTML = '';
    posts.forEach((post, i) => {
      postsContainer.innerHTML += `
        <div class="card">
          <img src="${post.thumbImage || 'https://via.placeholder.com/600x300'}" alt="${post.thumbImageAltText || 'Imagem do Post'}">
          <div class="card-body">
            <h5 class="card-title">${post.title ?? ''}</h5>
            <h6 class="card-subtitle">${post.postDate ?? ''} • ${post.profileName ?? ''}</h6>
            <p class="card-text">${post.description ?? ''}</p>
            <a href="post.html?id=${i}" class="btn btn-primary">Leia mais</a>
          </div>
        </div>
      `;
    });
  })
  .catch((erro) => {
    postsContainer.innerHTML = '<p>Não foi possível carregar os posts.</p>';
    console.error('Erro ao carregar posts:', erro);
  });