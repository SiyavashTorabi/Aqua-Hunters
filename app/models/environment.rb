class Environment < ApplicationRecord
has_many :species, dependent: :destroy




end
