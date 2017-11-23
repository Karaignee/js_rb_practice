

# fibonacci in Ruby 1.9.2
f = ->(x){ x < 2 ? x : f[x-1] + f[x-2] }
puts f[6]        #=> 8


#where x is less than 2 put x, otherwise x minus one plus x minus 2??



