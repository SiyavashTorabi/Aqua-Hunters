class Region < ApplicationRecord
  has_and_belongs_to_many :species, dependent: :destroy
end