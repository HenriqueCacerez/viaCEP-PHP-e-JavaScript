/*
"cep",
"logradouro",
"complemento",
"bairro",
"localidade",
"uf",
"igbe",
"gia",
"ddd",
"siafi"
*/

$('#btn-pesquisar').click(function(){
    let CEP = $('#CEP').val()
    let validacep = /^([\d]{2})\.*([\d]{3})\-*([\d]{3})/;

    return validacep.test(CEP) ? viaCEP(CEP) : alert('CEP inválido! Informe um CEP válido sem traços');
});

function viaCEP(CEP){
    
    $.getJSON('https://viacep.com.br/ws/'+CEP+'/json/', function(data){

        $('#resultado-viaCEP').removeClass('d-none');

        $('#viacep-cidade').html(data['localidade']);
        $('#viacep-logradouro').html(data['logradouro']);
        $('#viacep-bairro').html(data['bairro']);
        $('#viacep-estado').html(data['uf']);
        $('#viacep-gmaps').html('<a href="https://www.google.com.br/maps/search/'+CEP+'" target="_blank">Google Maps</a>');
    });
}