200.downto(1) do |i|

if i % 3 == 0

puts i
end

end

# #flatten array

# # > nest_array =  [[1,2,[3]],4, [3, 4, 5], [4, 5, 6]]
# #   > nest_array.flatten
# #   => [1, 2, 3, 3, 4, 5, 4, 5, 6, 7, 8, 9]

# class Array
#   def flattary
#     each_with_object([]) do |element, flattened|
#       flattened.push *(element.is_a?(Array) ? element.flattify : element)
#     end
#   end
# end

# def flattery(array, level = -1, result = [])
#   array.each do |el|
#     if Array === el && level != 0
#       flattery el, level - 1, result
#     else
#       result << el
#     end
#   end
  
#   result
# end

# def is_prime?(num)
#   return false if num <= 1
#   Math.sqrt(num).to_i.downto(2).each {|i| return false if num % i == 0}
#   true
# end

# def check_prime?(num) #define check_prime method with a param called num
# 	return false if num <= 1  #check if the num is less than or equal to 1
# 	Math.sqrt(num).to_i.downto(2).each {|i| return false if num % i == 0}  #square root of  param, and pass decreasing values into the block which checks if the number divided by itself give s a zero remainder
# 	true #otherwise return true
# end

# # [1,2,3,4,[1,2,3,4],5].flattary # => [1, 2, 3, 4, 1, 2, 3, 4, 5]

# # class ArrayConvert
# #     def self.flatten_array(array,init)
# #         array.each do |a|
# #          if a.class==Array
# #             flatten_array(a,init)
# #          else
# #             init << a
# #          end
# #         end
# #       init
# #     end

# #   p flatten_array([1, 2, 3, 4, [1, 2, 3, 4], 5],[])

# # end