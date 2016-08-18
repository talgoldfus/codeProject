class AddCorrectToGameOptions < ActiveRecord::Migration[5.0]
  def change
    add_column :game_options, :correct, :boolean
  end
end
