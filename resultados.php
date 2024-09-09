<?php
    $nome = addcslashes($_POST['nome']);
    $email = addcslashes($_POST['email']);
    $mensagem = addcslashes($_POST['mensagem']);


    $para = "anajuliasn.2007@gmail.com";
    $assunto = "Coleta de dados - Crista da Onda";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Mensagem: ".$mansagem;

    $cabeca = "From: anajuliasn.2007@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo(E-mail enviado com sucesso!);
    }else{
        echo(Houve um erro ao enviar o e-mail!);
    }
?>