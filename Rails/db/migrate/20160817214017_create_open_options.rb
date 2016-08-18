class CreateOpenOptions < ActiveRecord::Migration[5.0]
  def change
    create_table :open_options do |t|
      t.string :correct_answer
      t.integer :question_id
      t.boolean :open , :default => true

      t.timestamps
    end
  end
end
