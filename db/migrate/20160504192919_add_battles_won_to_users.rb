class AddBattlesWonToUsers < ActiveRecord::Migration
  def change
    add_column :users, :battles_won, :integer, :default => 0
  end
end
