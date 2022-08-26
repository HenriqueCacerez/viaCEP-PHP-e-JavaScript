<?php
    require_once 'app/viaCEP.php';
    $viaCEP = new viaCEP;

    $CEP = "07934-350";

    echo $viaCEP->getDado("localidade", $CEP) . "<br>";
    echo $viaCEP->getDado("logradouro", $CEP) . "<br>";
    echo $viaCEP->getDado("bairro", $CEP) . "<br>";
    echo $viaCEP->getDado("uf", $CEP) . "<br>";

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
        "siafi",
        "gmaps"
   */

?>

<!-- Link do Google Maps -->
<a href="<?= $viaCEP->getDado("gmaps", $CEP); ?>" target="_blank">Google Maps</a>





