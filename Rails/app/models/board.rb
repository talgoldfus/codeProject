class Board < ApplicationRecord
  has_many :games
  has_many :board_categories
  has_many :categories , through: :board_categories
  has_many :questions, through: :categories

  #This returns an array for every instance of a board, which is redundant.
  #This might be useful elsewhere, but not in the serializer

  def self.returnTopics
    boards = Board.all.each_with_object({}) { |(k,v), h|
      h[k.id] = k.topic
     }
  end

  def identifyCategory
    # find the id that was clicked from the params

  end

  def average_score
    Game.find_average_score('board', self.id)
  end

  def percentage_correct
    board_options_total = Game.joins(:options).where(board_id: self.id)
    board_options_count = board_options_total.length
      if board_options_count == 0
        return 'Not Yet Played'
      else
        correct_board_options = Game.joins(:options).where(board_id: board_id).where('options.correct': true)
        correct_board_options_count = correct_board_options.length
        return correct_board_options_count.to_f/board_options_count.to_f
      end
  end


end
