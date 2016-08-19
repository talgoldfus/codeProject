# class BoardAnalytics 

#   def self.run(board_id)
#     board = Board.find(board_id)
#     return {topic: board.name, categories: 
#     average_score = board.average_score
#     board_categories = board.categories
#     board_categories.each do |category|
#     category_ {category.name: }
#       category.questions.each do |question|
#         byebug 
#       end
#     end
#   end 


#   def find_average_score(board)
#     return {"percentage_correct": board.average_score}
#   end


# end 

class UserAnalytics

  def run(user)
    user_average_score = {average_score: user.average_score}
  end

  def games(user)
    games = Game.where(user_id: user.id)
    games.each_with_object({}) do |game, hash|
      byebug
      hash[topic] = game.board.topic
      hash[date] = game.created_at
      hash[score] = game.final_score
    end
  end


end 