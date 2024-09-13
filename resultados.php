<?php
    //Sanitização dos dados
    $nome = addslashes(trim($_POST['nome']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $mensagem = addslashes(trim($_POST['mensagem']));

    // Validação do e-mail
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "E-mail inválido!";
        exit;
    }

    $para = "anajuliasn.2007@gmail.com";
    $assunto = "Coleta de dados - Crista da Onda";

    //Corpo do e-mail
    $corpo = "Nome: ".$nome."\nE-mail: ".$email."\nMensagem: ".$mensagem;

    //Cabeçalho do e-mail
    $cabeca = "From: anajuliasn.2007@gmail.com"."\nReply-to: ".$email."\nX-Mailer: PHP/".phpversion();

    //Envio do e-mail
    if(email($para, $assunto, $corpo, $cabeca)){
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Houve um erro ao enviar o e-mail!";
    }
?> 