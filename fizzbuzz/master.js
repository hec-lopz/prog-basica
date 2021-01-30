//3 Fizz, 5 Buzz.
var divisible = false
var number;
var divisor;
var name;

for (var i = 1; i <=100; i++)
{
  divisor = evaluar(i)

}

function evaluar(number)
{
  if (number % 3 == 0)
  {
    name = 'Fizz'
  }
  else if (number % 5 == 0)
  {
    name = 'Buzz'
  }
  else
  {
    name = number
  }
}
