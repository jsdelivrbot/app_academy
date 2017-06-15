require 'rspec'
require 'perfect_bits'

describe "basic helper methods" do
  describe "#binarify" do
    it "returns a string" do
      expect(binarify(1234)).to be_kind_of(String)
    end
    it "returns a string" do
      expect(binarify(1234)).to eq('10011010010')
    end
  end

  describe "#base_tenify" do
    it "returns an integer" do
      expect(base_tenify('10011010010')).to be_kind_of(Integer)
    end
    it "returns a string" do
      expect(base_tenify('10011010010')).to be(1234)
    end
  end

  # describe "#shuffle" do
  #   it "returns a shuffled deck" do
  #     a = deck
  #     b = a.dup
  #     b.shuffle!
  #     expect(a.cards).not_to eq(b.cards)
  #   end
  # end
end
