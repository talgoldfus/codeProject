class CreateGameOptions < ActiveRecord::Migration[5.0]
  def change
    create_table :game_options do |t|
      t.integer :game_id
      t.integer :option_id

      t.timestamps
    end
  end
end
