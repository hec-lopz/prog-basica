var divisible = false;
var num;
var divisor;

for(i = 1; i <= 100; i++)
{
  if(multiplos(i, 3))
  {
    document.write("Fizz");
    num = i
    divisor = 3
  }

  if(multiplos(i, 5))
  {
    document.write("Buzz");
  }

  if(!multiplos(i, 3) && !multiplos(i, 5))
  {
    document.write(i);
  }
  document.write("<br />")
}

function multiplos(num, divisor)
{
  if(num % divisor == 0)
  {
    return divisible = true;
  }
  else
  {
    return divisible = false;
  }
}
