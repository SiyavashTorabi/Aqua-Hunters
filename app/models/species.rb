class Species < ApplicationRecord
  belongs_to :environment, dependent: :destroy

  belongs_to :region, dependent: :destroy
end
