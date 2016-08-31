class Category < ApplicationRecord
  has_many :questions
  has_many :board_categories
  has_many :boards , through: :board_categories

  def self.returnCategories
    # show all categories
    categories = Category.all.each_with_object({}) { |(k,v), h|
      h[k.id] = k.name
     }
  end


end
