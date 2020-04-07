class CreateBills < ActiveRecord::Migration[6.0]
  def change
    create_table :bills, id: :uuid do |t|
      t.string :title, null: false
      t.decimal :total_amount, default: 0
      t.string :customer_name
      t.string :customer_email, null: false
      t.string :customer_phone
      t.text :bill_summary
      t.boolean :status, default: false, null: false

      t.timestamps
    end
  end
end
