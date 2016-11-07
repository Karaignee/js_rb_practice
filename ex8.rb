
#declare a variable with the keys 1st, 2nd, 3rd, 4th
formatter = "%{first} %{second} %{third} %{fourth}"

#print out the variable with the following values for each k/v pair
puts formatter % {first: 1, second: 2, third: 3, fourth: 4}
#print again with a different value for each of the four pairs
puts formatter % {first: "one", second: "two", third: "three", fourth: "four"}
#print again with true or false as a value for each pair
puts formatter % {first: true, second: false, third: true, fourth: false}
#print a fourth time, but with the declared variable as the entire actual value which prints out for each key
puts formatter % {first: formatter, second: formatter, third: formatter, fourth: formatter}


puts formatter % {
  first: "I had this thing.",
  second: "That you could type up right.",
  third: "But it didn't sing.",
  fourth: "So I said goodnight."
}

# You will almost always use #{} to format your strings, but there are times when you want to apply the same format to multiple values. That's when %{} comes in handy.


