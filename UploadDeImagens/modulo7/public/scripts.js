/*
// format moeda
const input = document.querySelector('input[name="price"]')
input.addEventListener("keydown", function(e){
   setTimeout(function(){
    let { value } = e.target

    value = value.replace(/\D/g,"")

    value = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value/100)
  
    e.target.value = value
  }, 1)
}) 
*/

// criando mascara de moeda
const Mask = {
  apply(input, func) {
    setTimeout(function () {
      input.value = Mask[func](input.value);
    }, 1);
  },
  formatBRL(value) {
    value = value.replace(/\D/g, "");

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value / 100);
  },
};

const PhotosUploads = {
  preview: document.querySelector('#photos-preview'),
  uploadLimit: 6,

  handleFileInput(event) {
    const { files: FileList } = event.target;
    if (PhotosUploads.hasLimit(event)) return

    Array.from(FileList).forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        const image = new Image();
        image.src = String(reader.result);

        const div = PhotosUploads.getContainer(image)

        PhotosUploads.preview.appendChild(div)
      };

      reader.readAsDataURL(file)
    });
  },
  hasLimit(event){
    const { uploadLimit } = PhotosUploads;
    const { files: fileList  } = event.target

    if (fileList.length > uploadLimit) {
      alert(`Envie no máximo ${uploadLimit} fotos`);
      event.preventDefault();
      return true;
    }
    return false
  },
  getContainer(image) {
    const div = document.createElement("div");
        div.classList.add('photo');

        div.onclick = PhotosUploads.removerPhoto

        div.appendChild(image)

        div.appendChild(PhotosUploads.getRemoverButton())

        return div
  },
  getRemoverButton(){
    const button = document.createElement('i')
    button.classList.add('material-icons')
    button.innerHTML = "close"
    return button
  },
  removerPhoto(event){
    const photoDiv = event.target.parentNode
    const photosArray = Array.from(PhotosUploads.preview.children)
    const index = photosArray.indexOf(photoDiv)

    photoDiv.remove()
  }
  
};
