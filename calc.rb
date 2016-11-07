
def perimeter(width, length)
	2 * (width + length)
end

puts "length?"
length = gets.to_i

puts "width?"
width = gets.to_i


print = perimeter(width, length)


# puts "Celsius? "
# input = gets.chomp

# celsius_input = input.gsub(/\s/,'').to_i

# def celsius_tofah(celsius_input)
#     fah = (celsius_input * 9) / 5 + 32
#     return fah
# end

# puts "#{celsius_tofah(celsius_input)} in Fahrenheit"



# years = 20
# MONTHS_PER_YEAR = 12
# months = years * MONTHS_PER_YEAR
# puts "A #{years}-year-old is #{months} months old."