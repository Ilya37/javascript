<!DOCTYPE html>
<html>
  <head>
    <title>Калькулятор</title>
    <meta charset="utf-8">
  </head>
  <body>
    <script>
      let a = parseInt(prompt('Введи число 1'));
      let b = parseInt(prompt('Введи число 2'));
      let operator = prompt('Введите оператор');
      //alert(a+b);

      switch(operator){
        case '+':
          alert(a+b);
          break;
        case '-':
          alert(a-b);
          break;
        case '*':
          alert(a*b);
          break;
        case '/':
          alert(a/b);
          break;
        default:
          alert(toLowerCase('Неправильный оператор. Введите правильный'))
      }
    </script>
  </body>
</html>
