class AddDateToAccounts < ActiveRecord::Migration[6.0]
  def change
    add_column :accounts, :date, :date
  end
end
