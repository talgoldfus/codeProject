class OpenOption < ApplicationRecord
  belongs_to :question, optional: true

end
