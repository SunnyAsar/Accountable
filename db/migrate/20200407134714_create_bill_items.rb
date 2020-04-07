class CreateBillItems < ActiveRecord::Migration[6.0]
  def change
    create_table :bill_items, id: :uuid do |t|
      t.string :name
      t.decimal :amount
      t.references :bill, type: :uuid, null: false, foreign_key: true

      t.timestamps
    end
  end
end
