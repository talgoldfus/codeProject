class User < ApplicationRecord
  has_secure_password
  has_many :games

  def average_score 
    Game.find_average_score('user', self.id)
  end

  def self.leader_board 
    self.all.map{|user| user.average_score}.sort[0..10]
  end

end
