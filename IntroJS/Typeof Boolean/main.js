let valor = prompt('Digite um valor:');
if (valor.toLowerCase() === 'true') {
  valor = true;
} else if (valor.toLowerCase() === 'false') {
  valor = false;
}

if (typeof valor === 'boolean') {
  alert('É um booleano');
} else {
  alert('Não é um booleano');
}