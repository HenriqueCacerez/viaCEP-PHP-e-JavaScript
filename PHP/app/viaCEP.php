<?php

    class viaCEP {

        function validarCEP($CEP){
           return preg_match('/^[-0-9-]+$/', $CEP) && mb_strlen($CEP) >= 8 && mb_strlen($CEP) < 10 ? true : false;
        }

        function getDado($dado, $CEP){
        
            if(!$this->validarCEP($CEP)):
                return 'CEP inválido!';
                exit;
            endif;

            if($dado == "gmaps"):
                return "https://www.google.com.br/maps/search/$CEP";
                exit;
            endif;

            $url = "https://viacep.com.br/ws/$CEP/json/";
    
            $curl = curl_init($url);
            curl_setopt($curl, CURLOPT_URL, $url);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            
            $viacep = curl_exec($curl);
            $viacep_data = json_decode($viacep, true);

            return $viacep_data != NULL ? $viacep_data[$dado] : "Falha na conexão";
            
        }

    }