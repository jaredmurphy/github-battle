class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :location
      t.string :blog
      t.integer :high_score
      t.string :avatar_url
      t.string :github_url

      t.timestamps null: false
    end
  end
end
