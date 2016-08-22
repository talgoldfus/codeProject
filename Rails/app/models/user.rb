class User < ApplicationRecord
  has_secure_password
  has_many :games
    has_many :game_options, through: :games

  def average_score 
    Game.find_average_score('user', self.id)
  end

  def self.leader_board 
    leaders = self.all.sort do |user| 
      user.average_score      
    end.reverse[0..10]

    return leaders.map do |user|
          {name: user.email, score: user.average_score}
        end

    # self.all.map{|user| user.average_score}.sort[0..10]
  end

  def right_answers
    Game.right_answers(self)
  end

  def questions_got_wrong
    wrong_answers = Option.wrong_answers(self)
    wrong_answers.map{|option| option.question}
  end

  def questions_got_right
    right_answers = Option.right_answers(self)
    right_answers.map{|option| option.question}
  end

end
