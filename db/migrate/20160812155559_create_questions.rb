class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.integer :category_id
      t.integer :difficulty
      t.string :content

      t.timestamps
    end
  end
end
