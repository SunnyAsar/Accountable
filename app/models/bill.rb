class Bill < ApplicationRecord

  validates :title, :total_amount, :customer_name, :customer_name, :customer_email, :bill_summary, presence: true

end
