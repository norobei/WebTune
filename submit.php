<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>ご利用ありがとうございます。</h1>
    <?php
    $username = $_POST['name'];
    echo "こんにちは、" . htmlspecialchars($username) . "さん！";
    $userURL = $_POST['URL'];
    ?>
    </p>
    <p>ホームページを制作しました。</p>
    <p>URLはこちら→<a href="<?= "./".$userURL.".html" ?>"><?= "./".$userURL.".html" ?></a></p>


</body>

</html>
<?php
file_put_contents(
    $userURL . ".html",
    '<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>これは会社のホームページです</h1>
</body>
</html>'
);
?>