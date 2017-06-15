require 'rspec'
require 'perfect_bits'

describe "basic helper methods" do
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

  describe "#binary_order_of_magnitude" do
    it "returns correct value" do
      # expect(factorial(4)).to be(4*3*2*1)
      # expect(factorial(20)).to be(2432902008176640000)
    end
  end
end

describe "perfect square helper methods" do
  it "#is_perfect_square?" do
    expect(is_perfect_square?(2*2)).to be(true)
    expect(is_perfect_square?(1234*1234)).to be(true)
  end
  it "#next_perfect_square" do
    expect(next_perfect_square(2*2)).to be(3*3)
    expect(next_perfect_square(1234*1234)).to be(1235*1235)
  end
  it "#prev_perfect_square" do
    expect(prev_perfect_square(3*3)).to be(2*2)
    expect(prev_perfect_square(1235*1235)).to be(1234*1234)
  end
end

describe "perfect bit helper methods" do
  it "#is_perfect_bit?" do
    expect(is_perfect_bit?(4)).to be(true)
    expect(is_perfect_bit?(523)).to be(true)
    expect(is_perfect_bit?(1099511627776)).to be(true)
  end
  it "#next_perfect_bit" do
  end
  it "#prev_perfect_bit" do
  end
end

describe "binary base helper methods" do
  it "#is_binary_base?" do
    # expect(is_perfect_square?(4)).to be(true)
    # expect(is_perfect_square?(2500)).to be(true)
  end
  it "#next_binary_base" do
  end
  it "#prev_binary_base" do
  end
end
