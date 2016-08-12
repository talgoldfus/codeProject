class Board < ApplicationRecord
  has_many :players
  has_many :categories

  #This returns an array for every instance of a board, which is redundant. 
  #This might be useful elsewhere, but not in the serializer

  def returnCategories
    boards = Board.all.map do |board|
      board.topic
    end
  end

end
