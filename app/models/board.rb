class Board < ApplicationRecord
  has_many :players
  has_many :categories

  #This returns an array for every instance of a board, which is redundant. 
  #This might be useful elsewhere, but not in the serializer

  def self.returnCategories
    boards = Board.all.each_with_object({}) { |(k,v), h| 
      h[k.id] = k.topic
     }      
  end

  def identifyCategory
    # find the id that was clicked from the params
    
  end

end
