class CreatePlayers < ActiveRecord::Migration[5.0]
  def change
    create_table :players do |t|
      t.integer :board_id
      t.integer :user_id
      t.integer :points

      t.timestamps
    end
  end
end
