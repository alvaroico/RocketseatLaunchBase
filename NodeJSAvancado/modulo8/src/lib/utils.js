module.exports = {
  date(timestamp) {
    const date = new Date(timestamp);

    // yyyy ano
    const year = date.getFullYear();
    // mm mes
    const month = `0${date.getMonth() + 1}`.slice(-2);
    // dd dia
    const day = `0${date.getDate()}`.slice(-2);

    const hour = date.getHours()
    const minutes = date.getMinutes()
    return {
      day,
      month,
      year,
      hour,
      minutes,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`,
      format: `${day}/${month}/${year}`,
    };
  },
  formatPrice(price) {

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price / 100);
  },
  formatCpfCnpj(value){
      value = value.replace(/\D/g,"")
      
      if(value.length > 14) value = value.slice(0, 14)
  
      if(value.length > 11) {
          //11222333444455
          value = value.replace(/(\d{2})(\d)/, "$1.$2")
          //11.222333444455
          value = value.replace(/(\d{3})(\d)/, "$1.$2")
          //11.222.333444455
          value = value.replace(/(\d{3})(\d)/, "$1/$2")
          //11.222.333/444455
          value = value.replace(/(\d{4})(\d)/, "$1-$2")
          //11.222.333/4444-55            
      } else {
          value = value.replace(/(\d{3})(\d)/, "$1.$2")
          
          value = value.replace(/(\d{3})(\d)/, "$1.$2")
  
          value = value.replace(/(\d{3})(\d)/, "$1-$2")
      }
  
      return value
  },
  formatCep(value) {
      value = value.replace(/\D/g,"")
      
      if(value.length > 8) value = value.slice(0, 8)
      
      value = value.replace(/(\d{5})(\d)/, "$1-$2")          
  
      return value
  }
};
