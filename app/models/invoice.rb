class Invoice < ApplicationRecord
  default_scope -> { order(created_at: :desc) }
  enum recurring: [:true, :false]
  enum status: [:paid, :unpaid]

  belongs_to :user

  # validate :title, presence: true
  # validate :amount, presence: true, length: { minimum: 1 }
end
