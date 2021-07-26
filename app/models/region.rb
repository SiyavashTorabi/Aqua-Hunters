class Region < ApplicationRecord
  has_many :species, dependent: :destroy
end
