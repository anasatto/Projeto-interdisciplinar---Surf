<?php
if(isset($_POST["nome"]) or isset($_POST["email"])){
        $nome = $_POST["nome"];
        $email = $_POST["email"];
        $mensagem = $_POST["mensagem"];
echo "<h2>Mensagem recebida com sucesso!</h2>";
echo "Usuário: $nome <br>";
echo "E-Mail: $email <br>";
echo "Mensagem: $mensagem";
}
?>