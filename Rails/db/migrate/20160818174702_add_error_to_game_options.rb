class AddErrorToGameOptions < ActiveRecord::Migration[5.0]
  def change
    add_column :game_options, :error, :text
  end
end
