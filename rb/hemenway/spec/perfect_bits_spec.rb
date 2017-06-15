require 'rspec'
require 'perfect_bits'
require 'perfect_bits'

describe "base two - base ten conversion methods" do
  describe "#binarify" do
    it "returns a string" do
      expect(binarify(1234)).to be_kind_of(String)
    end
    it "returns correct value" do
      expect(binarify(1234)).to eq('10011010010')
    end
  end

  describe "#base_tenify" do
    it "returns an integer" do
      expect(base_tenify('10011010010')).to be_kind_of(Integer)
    end
    it "returns correct value" do
      expect(base_tenify('10011010010')).to be(1234)
    end
  end
end

describe "perfect square helper methods" do
  describe "#prev_perfect_square" do
    it "returns correct value" do
      expect(prev_perfect_square(3*3)).to be(2*2)
      expect(prev_perfect_square(1235*1235)).to be(1234*1234)
    end
  end

  describe "#is_perfect_square?" do
    it "returns correct value" do
      expect(is_perfect_square?(2*2)).to be(true)
      expect(is_perfect_square?(1234*1234)).to be(true)
    end
  end

  describe "#next_perfect_square" do
    it "returns correct value" do
      expect(next_perfect_square(2*2)).to be(3*3)
      expect(next_perfect_square(1234*1234)).to be(1235*1235)
    end
  end
end

describe "perfect bit helper methods" do
  describe "#prev_perfect_bit" do
    it "returns correct value" do
      expect(prev_perfect_bit(4)).to be(2)
      expect(prev_perfect_bit(523)).to be(519)
      expect(prev_perfect_bit(1099511627776)).to be(1099511627760)
    end
  end

  describe "#is_perfect_bit?" do
    it "returns correct value" do
      expect(is_perfect_bit?(4)).to be(true)
      expect(is_perfect_bit?(523)).to be(true)
      expect(is_perfect_bit?(1099511627776)).to be(true)

      expect(is_perfect_bit?(3)).to be(false)
      expect(is_perfect_bit?(520)).to be(false)
      expect(is_perfect_bit?(1099511627775)).to be(false)
    end
  end

  describe "#next_perfect_bit" do
    it "returns correct value" do
      expect(next_perfect_bit(4)).to be(true)
      expect(next_perfect_bit(512)).to be(519)
      expect(next_perfect_bit(1099511627775)).to be(1099511627776)
    end
  end
end

describe "binary base helper methods" do
  describe "#prev_binary_base" do
    it "returns correct value with small input value" do
      expect(prev_binary_base(2**1)).to be(2**0)
      expect(prev_binary_base(2**10)).to be(2**9)
    end
    it "returns correct value with large input value" do
      expect(prev_binary_base(2**2345 - 1)).to be(2**2344)
      expect(prev_binary_base(2**2345)).to be(2**2344)
      expect(prev_binary_base(2**2345 + 1)).to be(2**2345)
    end
  end

  describe "#is_binary_base?" do
    it "returns correct value" do
      expect(is_binary_base?(2**0)).to be(true)
      expect(is_binary_base?(2**2345)).to be(true)
      expect(is_binary_base?(2**2345 + 1)).to be(false)
    end
  end

  describe "#next_binary_base" do
    it "returns correct value with small input value" do
      expect(next_binary_base(2**0)).to be(2**1)
      expect(next_binary_base(2**9)).to be(2**10)
    end
    it "returns correct value with large input value" do
      expect(next_binary_base(2**2345 - 1)).to be(2**2345)
      expect(next_binary_base(2**2345)).to be(2**2346)
      expect(next_binary_base(2**2345 + 1)).to be(2**2346)
    end
  end
end

# describe "combinatoric helper methods" do
#     describe "#factorial" do
#     it "handles base case properly" do
#       expect(factorial(0)).to be(1)
#       expect(factorial(1)).to be(1)
#     end
#     it "returns correct value" do
#       expect(factorial(4)).to be(24)
#       expect(factorial(20)).to be(2432902008176640000)
#     end
#   end
# end
#
# describe "other helper methods" do
#   describe "#binary_order_of_magnitude" do
#     it "returns correct value" do
#       expect(binary_order_of_magnitude(1234)).to be(10)
#     end
#   end
# end
