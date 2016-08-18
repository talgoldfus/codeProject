class AddLanguageToOpenOptions < ActiveRecord::Migration[5.0]
  def change
    add_column :open_options, :language, :string
  end
end
