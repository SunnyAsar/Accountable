class Account < ApplicationRecord
  default_scope -> { order(created_at: :desc) }

  enum account_type: [:income, :expense]
  belongs_to :user

  validates :title, presence: true
  validates :amount, presence: true
end
