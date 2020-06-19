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
    setTimeout(function(){
      input.value = Mask[func](input.value)
    }, 1)
  },
  formatBRL(value){
    value = value.replace(/\D/g,"")
    
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value/100)

  }
}

const PhotosUploads = {
  uploadLimit : 6,

  handleFileInput(event) {
  const { files: FileList } = event.target
  const { uploadLimit } = PhotosUploads

    if (FileList.length > uploadLimit ) {
    alert(`Envie no máximo ${uploadLimit} fotos`)
    event.preventDefault()
    return
    }
  }
}