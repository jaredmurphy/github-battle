class CreateBattles < ActiveRecord::Migration
  def change
    create_table :battles do |t|
      t.integer :winner_id
      t.integer :loser_id
      t.integer :winner_score
      t.integer :loser_score

      t.timestamps null: false
    end
  end
end
