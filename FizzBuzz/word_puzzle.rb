word_puzzle.rb

def init_grid
	#source = ('A'..'Z').to_a
    # @grid = []
    # n.times do |row|
    #   @grid[row] = n.times.collect { source.sample }
    # end

end

    # this above is his obviously, but I would have created rows, and pushed in the randomised alpahbet, and then repeated the same number of cols for each row.



def find_word_horizontally
	#call the private method add_dictionary (see below)
	#loop through the grid horizontally
	#running a do each block over each word until you get to the end of the words
	# throw any matches in to an array
	#return matches array
end

def find_word_vertically
	#same as above except vertical, and maybe try to find some logic I could pull out of here to create a new method so it wasn't repetitive?
end

def find_word_diagonally
	#as above
end

private

def add_dictionary
	#some way to push the dictionary file into the grid
	
end