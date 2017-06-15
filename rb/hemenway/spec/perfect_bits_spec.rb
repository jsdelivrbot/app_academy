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

  describe "#prev_perfect_square" do
    it "returns correct value" do
      expect(prev_perfect_square(3*3)).to be(2*2)
      expect(prev_perfect_square(1235*1235)).to be(1234*1234)
    end
  end
end

describe "perfect bit helper methods" do
  describe "#is_perfect_bit?" do
    it "returns correct value" do
      expect(is_perfect_bit?(4)).to be(true)
      expect(is_perfect_bit?(523)).to be(true)
      expect(is_perfect_bit?(1099511627776)).to be(true)
    end
  end

  describe "#next_perfect_bit" do
    it "returns correct value" do
      expect(is_perfect_bit?(4)).to be(true)
      expect(is_perfect_bit?(523)).to be(true)
      expect(is_perfect_bit?(1099511627776)).to be(true)
    end
  end

  describe "#prev_perfect_bit" do
    it "returns correct value" do
      expect(is_perfect_bit?(4)).to be(true)
      expect(is_perfect_bit?(523)).to be(true)
      expect(is_perfect_bit?(1099511627776)).to be(true)
    end
  end
end

describe "binary base helper methods" do
  describe "#is_binary_base?" do
    it "returns correct value" do
      expect(is_binary_base?(2**0)).to be(true)
      expect(is_binary_base?(2**2345)).to be(true)
      expect(is_binary_base?(2**2345 + 1)).to be(false)
    end
  end
  describe "#next_binary_base" do
    it "returns correct value" do
    end
  end
  describe "#prev_binary_base" do
    it "returns correct value" do
    end
  end
end

describe "combinatoric helper methods" do
    describe "#factorial" do
    it "handles base case properly" do
      expect(factorial(0)).to be(1)
      expect(factorial(1)).to be(1)
    end
    it "returns correct value" do
      expect(factorial(4)).to be(24)
      expect(factorial(20)).to be(2432902008176640000)
    end
  end
end

describe "other helper methods" do
  describe "#binary_order_of_magnitude" do
    it "returns correct value" do
      expect(binary_order_of_magnitude(1234)).to be(10)
    end
  end
end
