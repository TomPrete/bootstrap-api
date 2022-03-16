console.log("LOADED...")

window.onload = function() {
  loadData();
};

const createAlbumInfo = (albums) => {
  albums.forEach(album => {
    const para = document.createElement("li");
    const node = document.createTextNode(`Title: ${album.title}`);
    para.appendChild(node);

    const element = document.getElementById("list");
    element.appendChild(para);
  })
}

const loadData = () => {
  fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
  .then(response => response.json())
  .then(data => {
    createAlbumInfo(data)
  })
}
