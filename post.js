const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const article = document.querySelector('.article');

if (id !== null) {
  fetch(`https://api-fake-blog.onrender.com/postagem/${id}`)
    .then(res => res.json())
    .then(post => {
      article.innerHTML = `
        <h2 class="card-title">${post.title ?? ''}</h2>
        <h6 class="card-subtitle">${post.postDate ?? ''} • ${post.profileName ?? ''}</h6>
        <img src="${post.thumbImage || 'https://via.placeholder.com/400x200'}" alt="${post.thumbImageAltText || 'Imagem do Post'}">
        <p>${post.description ?? ''}</p>
        <!-- Se existir campo de conteúdo completo, troque o description por ele -->
        <a href="index.html" class="btn btn-secondary">Voltar para o Blog</a>
      `;
    })
    .catch(() => {
      article.innerHTML = '<p>Post não encontrado.</p>';
    });
} else {
  article.innerHTML = '<p>URL inválida.</p>';
}