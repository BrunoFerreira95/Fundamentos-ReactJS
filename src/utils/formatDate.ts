// const formatDate = (date: Date): string =>
//   new Intl.DateTimeFormat('pt-br').format(date);

// export default formatDate;

// const formatDate = (date: Date): string => {
//   return Intl.DateTimeFormat('br-BR').format(new Date(date));
// };

// export default formatDate;

// const formatDate = (date: Date): string => {
//   return Intl.DateTimeFormat('pt-br').format(new Date(date));
// };

// export default formatDate;

const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat('pt-br').format(date);

export default formatDate;
