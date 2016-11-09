#simplest implementation loops through each number printing FB if divisible by 3 and 5, F if divisible by 3 and B if divisible by 5

prints '~~~~~~~~~~~ first attempt~~~~~~~~~~~~~'


1.upto(100) do |i|
  if i % 3 == 0 && i % 5 == 0
    puts 'FizzBuzz'
  elsif i % 3 == 0
    puts 'Fizz'
  elsif i % 5 == 0
    puts 'Buzz'
  else
    puts i
  end
end

prints '~~~~~~~~~~~ second attempt~~~~~~~~~~~~~'

#DRY-er implementation - i % 3 == 0 and i % 5 == 0 appear twice and puts appears 4 times:

1.upto(100) do |i|
  fizz = (i % 3 == 0)
  buzz = (i % 5 == 0)
  puts case
       when fizz && buzz then 'FizzBuzz'
       when fizz then 'Fizz'
       when buzz then 'Buzz'
       else i
       end
end