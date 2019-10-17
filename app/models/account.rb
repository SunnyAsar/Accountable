class Account < ApplicationRecord
  enum account_type: [:income, :expense]
  belongs_to :user
end
