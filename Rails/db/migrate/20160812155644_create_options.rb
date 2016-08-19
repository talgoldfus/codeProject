class CreateOptions < ActiveRecord::Migration[5.0]
  def change
    create_table :options do |t|
      t.integer :question_id
      t.string :language
      t.boolean :correct
      t.string :correct_answer
      t.string :content
      t.boolean :open , :default => false
      t.timestamps
    end
  end
end
