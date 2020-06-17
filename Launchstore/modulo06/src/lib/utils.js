module.exports = {
  date(timestamp) {
    const date = new Date(timestamp);

    // yyyy ano
    const year = date.getUTCFullYear();
    // mm mes
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    // dd dia
    const day = `0${date.getUTCDate()}`.slice(-2);

    return {
      day,
      month,
      year,
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
};
