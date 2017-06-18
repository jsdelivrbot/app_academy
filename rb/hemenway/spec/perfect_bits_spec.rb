require 'rspec'
require 'base_helpers'
require 'mid_helpers'
require 'perfect_bits'

describe "#perfect_bits" do
  it "returns correct value on initial range" do
    expect(perfect_bits(10,16)).to be(2)
    expect(perfect_bits(100, 128)).to be(10)
    expect(perfect_bits(1000, 1024)).to be(6)
    expect(perfect_bits(30000, 32768)).to be(651)
    expect(perfect_bits(9223372036854770000, 9223372036854775808)).to be(1)
  end
  it "returns correct value on mid range" do
    expect(perfect_bits(2,4)).to be(2)
    expect(perfect_bits(16,32)).to be(6)
    expect(perfect_bits(128, 256)).to be(37)
    expect(perfect_bits(16384, 32768)).to be(3369)
    expect(perfect_bits(2, 9223372036854775808)).to be(734248687150654971)
    expect(perfect_bits(128, 1099511627776)).to be(103351068365)
  end
  it "returns correct value on final range" do
    expect(perfect_bits(4,11)).to be(2)
    expect(perfect_bits(16,28)).to be(2)
    expect(perfect_bits(32,46)).to be(5)
    expect(perfect_bits(16384, 30000)).to be(2719)
    expect(perfect_bits(9223372036854775807, 9223372036854775815)).to be(2)
  end
  it "returns correct value on initial range + mid range" do
    expect(perfect_bits(10,32)).to be(7)
    expect(perfect_bits(30, 64)).to be(13)
    expect(perfect_bits(100, 256)).to be(46)
  end
  it "returns correct value on mid range + final range" do
    expect(perfect_bits(16,39)).to be(7)
    expect(perfect_bits(16,40)).to be(6)
    expect(perfect_bits(16,43)).to be(8)
    expect(perfect_bits(16,44)).to be(7)
    expect(perfect_bits(16,45)).to be(9)
    expect(perfect_bits(16,46)).to be(10)
    expect(perfect_bits(16,47)).to be(9)
    expect(perfect_bits(16,140)).to be(39)
  end
  it "returns correct value with standard input" do
    expect(perfect_bits(3456345634563,3456345634563000)).to be(393596500205643)
  end
end
