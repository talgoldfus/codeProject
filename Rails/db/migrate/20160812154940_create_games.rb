class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.integer :board_id
      t.integer :user_id
      t.integer :final_score

      t.timestamps
    end
  end
end
