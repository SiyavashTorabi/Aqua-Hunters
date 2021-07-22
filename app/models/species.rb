class Species < ApplicationRecord

  belongs_to :environment, dependent: :destroy

  has_and_belongs_to_many :regions
end
