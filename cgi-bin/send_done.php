<style type="text/css">
button{
  -moz-border-radius:6px;
  -webkit-border-radius:6px;
  border-radius:6px;
}
</style>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>ContactForm</title>
<link rel="icon" href="../img/nami-illust10.png" > 
</head>
<body>

<?php

if($_SERVER["REQUEST_METHOD"]=="POST")
{
      $name=$_POST["name"];
      $address=$_POST["address"];
      $inquiry=$_POST["inquiry"];
  }

if(isset($_POST["submit"])){
  mb_language("ja");
  mb_internal_encoding("UTF-8");
$subject="[自動返信]お問い合わせ内容の確認";
$body=<<<EOM

{$name}様
お問い合わせありがとうございます。
以下のお問い合わせ内容の確認メールをお送りしました。
===============================================
【お名前】
{$name}
【内容】
{$inquiry}
===============================================
内容を確認の上回答させていただきますので、
しばらくお待ちください。

EOM;

$fromEmail="dezone.hama164@gmail.com";/* 送信元のメールアドレス変換*/ 
$fromName="お問い合わせ";/*送信元の名前を変換*/
$header="From:".mb_encode_mimeheader($fromName)."<{$fromEmail}>";
// $header.="\n";
// $header.="Bcc:" .mb_encode_mimeheader("【連絡】お問い合わせあり")."<{dezone.hama164@gmail.com}>";



$my_address="dezone.hama164@gmail.com";
$my_subject="★お問い合わせ";
$my_header="From:".mb_encode_mimeheader($my_subject)."<{$fromEmail}>";
$my_body=<<<EOM

問い合わせ内容
===============================================
【お名前】
{$name}
【メールアドレス】
{$address}
【内容】
{$inquiry}
===============================================
丁寧な対応を心がけましょう！！

EOM;

mb_send_mail($my_address, $my_subject, $my_body, $my_header);
// mb_send_mail($address,$subject,$body,$header);
// phpinfo();

if (mb_send_mail($address,$subject,$body,$header)) {
    // echo "メールが送信されました。";
    echo "<div>";
    echo "<h1 class=\"contact-title\">お問い合わせ送信完了</h1>";
    echo "<p>";
    echo "お問い合わせありがとうございました。<br>";
    echo "内容を確認の上回答させていただきます。<br>";
    echo "しばらくお待ちください。";
    echo "</p>";
    echo "</div>";
  } else {
    echo "メールが送信できませんでした。";
  }
exit;
}
?>


</body>
</html>