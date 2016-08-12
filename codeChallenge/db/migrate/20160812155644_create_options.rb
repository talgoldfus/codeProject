class CreateOptions < ActiveRecord::Migration[5.0]
  def change
    create_table :options do |t|
      t.integer :question_id
      t.boolean :correct
      t.string :content

      t.timestamps
    end
  end
end
