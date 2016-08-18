class GameOption < ApplicationRecord
  belongs_to :game, optional: true
  belongs_to :option, optional: true


  def self.question_percentage_correct(question_id)
    all_options = Option.joins(:game_options).where(question_id: question_id)
    all_options_count = all_options.length 
    if all_options_count == 0 
      return 'Not Yet Answered' 
    else 
      correct_answers = all_options.where(correct: true)
      correct_answers_count = correct_answers.length 
      return correct_answers_count.to_f/all_options_count.to_f
    end 
  end 

  def self.board_percentage_correct(board_id)
    board_options_total = Game.joins(:options).where(board_id: board_id)
    board_options_count = board_options_total.length 
    if board_options_count == 0 
      return 'Not Yet Played' 
    else 
      correct_board_options = Game.joins(:options).where(board_id: board_id).where('options.correct': true)
      correct_board_options_count = correct_board_options.length 
      return correct_board_options_count.to_f/board_options_count.to_f
    end 
  end

  def self.number_of_questions_correct_per_game(game_id)
    number_of_options_selected = GameOption.where(game_id: game_id).length 
    number_of_correct_answers = GameOption.where(game_id: game_id).where(correct: true).length

    percentage_correct_answers = (number_of_correct_answers.to_f / number_of_options_selected.to_f) * 100
    percentage_correct_answers.round
  end

  # def self.questions_answered_correctly_by_user(user_id)
    # user = User.find(user_id)
    # users_games = user.games.map do |game| 
      # byebug
      # game.options 
    # end
    # options_for_each_set = users_games.map do |option_set| 
      # byebug
    # end
    # selected_answers_per_question = options_for_each_set.map do |option|
      # if option.correct == true
        # option.content
      # end
    # end
  # end
end
