require "minitest/autorun"

# Given a desired weight, return the smallest number of plates needed to equal that weight
  # Return as a hash - Ex. 135lb => {"45" => 2} | 199lb => {"45" => 2, "25" => 2, "5" => 2, "2.5" => 2}
# Plate Weights: 45lb, 25lb, 15lb, 10lb, 5lb, 2.5lb
# The calculation needs to take into account the weight of the bar (45lb)
# Always an even number of plates in total and plates are always added in a pair
# All weight should be divisable by 5lbs (if it's not, round the weight up)
# A weight total that is less than the bar or equal to the bar should return an string msg

class WeightCalc

  def initialize(desired, bar_weight)
    @desired = desired 
    @bar_weight = bar_weight 
    @plates_hash = {}
  end

  def round_up 
    until @desired % 5 == 0 
      @desired += 1
    end 
  end 

  def calc 
    if @desired < @bar_weight 
      return "Weight Must Be Greater Than Bar"
    elsif @desired == @bar_weight
      return "No Weight Needed"
    else 
      @desired -= @bar_weight 
      first_division = @desired / 90
        if first_division >= 1 
          @plates_hash["45"] = first_division * 2 
          remainder = @desired % 45
        end
    end
    return @plates_hash
  end

  def add_plates(amount)
      first_division = @desired / amount * 2
        if first_division >= 1 
          @plates_hash[amount] = first_division * 2 
          remainder = @desired % 45 
        end 


    first_modulo = @desired % 45 
    first_modulo 
  end 




  def divide_by(weight)
    self.desired / weight 
  end

  def remainder_by(weight)
    self.desired % weight 
  end

  # divide_by(45)

  # remainder_by(45)

end

describe WeightCalc do
  describe "when a 45lb bar is used" do
    it "must calc 40 correctly" do
      @wc = WeightCalc.new(40,45)
      result = @wc.calc
      result.must_equal "Weight Must Be Greater Than Bar"
    end

    it "must calc 45 correctly" do
      @wc = WeightCalc.new(45,45)
      result = @wc.calc
      result.must_equal "No Weight Needed"
    end
    
    it "must calc 95 correctly" do
      @wc = WeightCalc.new(95,45)
      result = @wc.calc
      result["25"].must_equal(2)
    end

    it "must calc 135 correctly" do
      @wc = WeightCalc.new(135,45)
      result = @wc.calc
      result["45"].must_equal(2)
    end

    it "must calc 199 correctly" do
      @wc = WeightCalc.new(199,45)
      result = @wc.calc
      result["45"].must_equal(2)
      result["25"].must_equal(2)
      result["5"].must_equal(2)
      result["2.5"].must_equal(2)
    end
    
    it "must calc 315 correctly" do
      @wc = WeightCalc.new(315,45)
      result = @wc.calc
      result["45"].must_equal(6)
    end
  end
end