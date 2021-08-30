const nb = []; const pordois = []; const toAdd = [];

var multiplo = 1

function get(){
	const input = document.querySelector(".binario")
	var i = 0
	while(nb.length < input.value.length ){
		nb.push(parseInt(input.value.charAt(i))); i++ }
	main() }

function main() {
	nb.forEach(function(n){
	pordois.push(multiplo)

	if( n == 1 ){
		toAdd.push(pordois[pordois.length-1])
		console.log(toAdd) }

	multiplo = multiplo*2  })

	result()
	return toAdd  }

function result () {
	const decimal = document.querySelector(".decimal")

	var total = 0
	toAdd.forEach(function(nahora){
		total = total + nahora })

	function zerar (lista){
		lista.splice(0,lista.length) }

    zerar(nb); zerar(pordois); zerar(toAdd); multiplo = 1;
	decimal.value = total }