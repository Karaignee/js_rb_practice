1.upto(20) do |i|
if i % 3 == 0 && i % 5 == 0
	puts "fizzbuzz"
elsif 
	i % 3 == 0
	puts 'fizz'
elsif 
	i % 5 == 0
	puts 'buzz'						
else
	puts i
end
end

print 'second attempt......'

# Let’s apply DRY to the naïve implementation above. The sources of duplication that immediately pop out to me are:

# i % 3 == 0 and i % 5 == 0 both appear twice
# puts appears four times

1.upto(30) do |i|
	fizz = (i % 3 == 0 )
	buzz = (i % 5 == 0 )
	puts case 
	when fizz && buzz then 'FizzBuzz'

	when fizz then 'Fizz'
	when buzz then 'Buzz'
	else i
	end
end

print 'third attempt......'

# I can still see duplication. The i % _ == 0 pattern appears twice, and the string literals 'Fizz' and 'Buzz' are duplicated inside the 'FizzBuzz' literal. Let’s fix those up too.

FIZZ = 'Fizz'
BUZZ = 'Buzz'

def divisible_by?(numerator, denominator)
	numerator % denominator == 0
end

1.upto(100) do |i|
	fizz = divisible_by?(i, 3)
	buzz = divisible_by?(i, 5)
puts case 
when fizz && buzz then FIZZ + BUZZ
when fizz then FIZZ
when buzz then BUZZ
else i
end	
end

# FIZZ = 'Fizz'
# BUZZ = 'Buzz'

# def divisible_by?(numerator, denominator)
#   numerator % denominator == 0
# end

# 1.upto(100) do |i|
#   fizz = divisible_by?(i, 3)
#   buzz = divisible_by?(i, 5)
#   puts case
#        when fizz && buzz then FIZZ + BUZZ
#        when fizz then FIZZ
#        when buzz then BUZZ
#        else i
#        end
# end
