$('#btn-pesquisar').click(function(){

    let CEP = $('#CEP').val();
    
    $.getJSON('https://viacep.com.br/ws/'+CEP+'/json/', function(data){

        $('#resultado-viaCEP').removeClass('d-none');

        $('#viacep-cidade').html(data['localidade']);
        $('#viacep-logradouro').html(data['logradouro']);
        $('#viacep-bairro').html(data['bairro']);
        $('#viacep-estado').html(data['uf']);
        $('#viacep-gmaps').html('<a href="https://www.google.com.br/maps/search/'+CEP+'" target="_blank">Google Maps</a>');
    });

});

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