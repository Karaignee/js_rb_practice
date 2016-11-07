# first, second, third, fourth = ARGV

# puts "Your first variable is: #{first}"
# puts "Your second variable is: #{second}"
# puts "Your third variable is: #{third}"
# puts "Your fourth variable is: #{fourth}"

#Now that you are using $stdin.gets.chomp you can add ARGV to your script to get something from the user. Don't over think this. Just use ARGV to get one thing, then $stdin.gets.chomp to get something else.


age, height, weight = ARGV

print "How old are you? "
print "How tall are you? "
print "How much do you weigh? "

age = $stdin.gets.chomp.to_i
height = $stdin.gets.chomp.to_i
weight = $stdin.gets.chomp.to_i

puts "So, you're #{age} old, #{height} tall and #{weight} heavy."

# print "Give me a number: "
# number = stdin.gets.chomp.to_i

# bigger = number * 100
# puts "A bigger number is #{bigger}."

# print "Give me another number: "
# another = gets.chomp
# number = another.to_i

# smaller = number / 100
# puts "A smaller number is #{smaller}."

# # print "How old are you? "
# # print "How tall are you? "
# # print "How much do you weigh? "
# # age = gets.chomp
# # height = gets.chomp
# # weight = gets.chomp

# # puts "So, you're #{age} old, #{height} tall and #{weight} heavy."