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
      setTimeout(() => {
          input.value = Mask[func](input.value)
      }, 1);
  },
  formatBRL(value) {        
      value = value.replace(/\D/g,"")
      
      return new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
      }).format(value/100)
  },
  cpfCnpj(value) {
    value = value.replace(/\D/g,"")
    
    if(value.length > 14) value = value.slice(0, 14)

    if(value.length > 11) {
        value = value.replace(/(\d{2})(\d)/, "$1.$2")
        
        value = value.replace(/(\d{3})(\d)/, "$1.$2")
        
        value = value.replace(/(\d{3})(\d)/, "$1/$2")
        
        value = value.replace(/(\d{4})(\d)/, "$1-$2")            
    } else {
        value = value.replace(/(\d{3})(\d)/, "$1.$2")
        
        value = value.replace(/(\d{3})(\d)/, "$1.$2")

        value = value.replace(/(\d{3})(\d)/, "$1-$2")
    }

    return value
},
  cep(value) {
    value = value.replace(/\D/g,"")
    
    if(value.length > 8) value = value.slice(0, 8)
    
    value = value.replace(/(\d{5})(\d)/, "$1-$2")          

    return value
}
}

const PhotosUpload = {
  uploadLimit: 6,
  input: "",
  files: [],
  preview: document.querySelector('#photos-preview'),
  handleFileInput(event) {
      const { files: fileList } = event.target
      PhotosUpload.input = event.target
      
      const photosHasId = []
      Array.from(this.preview.childNodes).forEach(item => {
          if(item.classList && item.classList.value == 'photo' && item.getAttribute('id')) {
              const alt = item.querySelector('img').alt
              const index = alt.indexOf('-')
              photosHasId.push(alt.slice(index + 1))
          }
      })

      if(PhotosUpload.hasLimit(event)) {
          PhotosUpload.updateInputFiles()
          return
      }

      Array.from(fileList).forEach(file => {
          const alreadyHasImage = PhotosUpload.files.some(image => image.name == file.name)
          const alreadyHadImage = photosHasId.some(name => name == file.name)

          if(!alreadyHasImage && !alreadyHadImage) {
              PhotosUpload.files.push(file)
          } else {
              alert(`Não envie fotos repetidas!`)
              PhotosUpload.updateInputFiles()
              event.preventDefault()
              return
          }
          
          const reader = new FileReader()
          
          reader.onload = () => {
              const image = new Image()
              image.src = String(reader.result)
              
              const div = PhotosUpload.getContainer(image)

              PhotosUpload.preview.appendChild(div)
          }
          
          reader.readAsDataURL(file)
      })
      
      PhotosUpload.updateInputFiles()
  },
  getAllFiles() {
      const dataTransfer = new ClipboardEvent("").clipboardData || new DataTransfer()

      PhotosUpload.files.forEach(file => dataTransfer.items.add(file))
      return dataTransfer.files
  },
  hasLimit(event) {
      const { input, preview } = PhotosUpload
      const { files: fileList } = input
      
      if (fileList.length > this.uploadLimit) {
          alert(`Envie no máximo ${this.uploadLimit} fotos!`)
          event.preventDefault()
          return true
      }
      
      const photosDiv = []
      preview.childNodes.forEach(item => {
          if(item.classList && item.classList.value == 'photo')
              photosDiv.push(item)
      })

      const totalPhotos = fileList.length + photosDiv.length

      if(totalPhotos > this.uploadLimit) {
          alert(`Você atingiu o máximo de ${this.uploadLimit} fotos!`)
          event.preventDefault()
          return true
      }

      return false
  },
  getContainer(image) {
      const div = document.createElement('div')
      div.classList.add('photo')

      div.onclick = PhotosUpload.removerPhoto

      div.appendChild(image)
      div.appendChild(PhotosUpload.getRemoveButton())

      return div
  },
  getRemoverButton() {
      const button = document.createElement('i')
      button.onclick = PhotosUpload.removePhoto
      button.classList.add('material-icons')
      button.innerHTML = 'close'
      
      return button
  },
  removerPhoto(event) {
      const photoDiv = event.target.parentNode // <div class='photos'>
      const newFiles = Array.from(PhotosUpload.preview.children).filter(file => {
          if(file.classList.contains('photo') && !file.getAttribute('id')) return true
      })
      
      const index = newFiles.indexOf(photoDiv)
      PhotosUpload.files.splice(index, 1)
      
      PhotosUpload.updateInputFiles()

      photoDiv.remove()
  },
  updateInputFiles() {
    PhotosUpload.input.files = PhotosUpload.getAllFiles()
},
  getRemoveButton() {
const button = document.createElement('i')
button.onclick = PhotosUpload.removePhoto
button.classList.add('material-icons')
button.innerHTML = 'close'

return button
},
  removePreviousPhoto(event) {
    const photoDiv = event.target.parentNode

    if (photoDiv.id) {
        const removedFiles = document.querySelector('input[name="removed_files"]')
        if (removedFiles) {
            removedFiles.value += `${photoDiv.id},`
        }
    }

    photoDiv.remove()
},

}

const ImageGallery = {
    highlight: document.querySelector('.gallery .highlight > img'),
    previews: document.querySelectorAll('.gallery-preview img'),
    setImage(e) {
        const { target } = e

        ImageGallery.previews.forEach(preview => preview.classList.remove('active'))

        target.classList.add('active')

        ImageGallery.highlight.src = target.src
    }


}