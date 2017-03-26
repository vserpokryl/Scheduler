<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <script src="{{ mix('js/test.js') }}"></script>
    <title>Document</title>
</head>
<body>
<script>
    axios.get('/')
        .then((response) => {console.log(response); document.write('<div class="test">Message</div>')})
        .catch((error) => {console.error(error); document.write('<div class="test">Message</div>')});
</script>
</body>
</html>