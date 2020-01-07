class CreateInvoices < ActiveRecord::Migration[6.0]
  def change
    create_table :invoices, id: :uuid do |t|
      t.string :title
      t.decimal :amount
      t.text :description
      t.string :customer_email
      t.boolean :recurring, default: false
      t.integer :status
      t.references :user, type: :uuid, null: false, foreign_key: true

      t.timestamps
    end
  end
end
