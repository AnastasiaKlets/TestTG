<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "6698861988:AAEHPOPZpmZ_i58Ru_5EfBvjJ1HR5unL2nY";
//Сюда вставляем chat_id
$chat_id = "-4179046044";



//Определяем переменные для передачи данных из нашей формы

$phone = ($_POST['phone']);
$theme = ($_POST['theme']);

$arr = array(
    'Тема' => $theme,
    'Телефон:' => $phone,
);
//Настраиваем внешний вид сообщения в телеграме
foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};



//Передаем данные боту
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");



?>