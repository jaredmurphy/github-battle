class User < ActiveRecord::Base
    belongs_to :battle
    before_save :default_values
    def default_values
        self.battles_won ||= 0
    end

    validates :username, presence: true
end
