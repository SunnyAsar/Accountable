class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts, id: :uuid do |t|
      t.string :title
      t.text :description
      t.decimal :amount
      t.integer :account_type, default: 0
      t.references :user, null: false, type: :uuid, foreign_key: true

      t.timestamps
    end
  end
end
