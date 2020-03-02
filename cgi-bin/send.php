<?php

if($_SERVER["REQUEST_METHOD"]=="POST")
{
      $name=$_POST["name"];
      $address=$_POST["address"];
      $inquiry=$_POST["inquiry"];
  }
// exit;


?>


<!-- <style type="text/css">
input,button{
  -moz-border-radius:6px;
  -webkit-border-radius:6px;
  -o-radius:6px;
  -ms-radius:6px;
  border-radius:6px;
}
</style> -->
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>ContactForm</title>
<link rel="icon" href="../img/nami-illust10.png" > 
</head>
<body>


<form action="send_done.php" method="post">
<input type="hidden" name="name" value="<?php echo $name; ?>">
<input type="hidden" name="address" value="<?php echo $address?>">
<input type="hidden" name="inquiry" value="<?php echo $inquiry; ?>">
<h1 class="contact-title">お問い合わせ内容確認</h1>
<p>お問い合わせ内容はこちらでよろしいでしょうか？<br>
よろしければ送信ボタンを押してください。</p>


<div>
        <div>
          <label>お名前</label>
          <p><?php echo $name; ?></p>
        </div>
        <div>
          <label>メールアドレス</label>
          <p><?php echo $address?></p>
        </div>
        <div>
          <label>内容</label>
          <p><?php echo nl2br($inquiry); ?></p><!--  ? -->
        </div>
</div>
<input type="button" value="修正" onclick="history.back(-1)">
<button type="submit" name="submit">送信</button>



</form>
</body>
</html>
