require 'byebug'
require 'base_helpers'
require 'mid_helpers'

describe "#count_perms_in_mid_range_noninclusive" do

  it "returns 0 when no mid range exists" do
    expect(count_perms_in_mid_range_noninclusive(13,15)).to eq(0)
    expect(count_perms_in_mid_range_noninclusive(32,63)).to eq(0)
    expect(count_perms_in_mid_range_noninclusive(71,120)).to eq(0)


    expect(count_perms_in_mid_range_noninclusive((2**30),(2**31 - 1))).to eq(0)
    expect(count_perms_in_mid_range_noninclusive((2**30 + 1),(2**31 - 1))).to eq(0)
    expect(count_perms_in_mid_range_noninclusive((2**30 + 1),(2**31))).to eq(0)

    expect(count_perms_in_mid_range_noninclusive(9223372036854770000,9223372036854775000)).to eq(0)
  end

  it 'returns correct value when num1 and num2 are consecutive binary bases' do
    expect(count_perms_in_mid_range_noninclusive(32,64)).to eq(11)
    expect(count_perms_in_mid_range_noninclusive(2**30, 2**31)).to eq(161568281)
  end

  it "returns correct value on standard input" do
    expect(count_perms_in_mid_range_noninclusive(3,31)).to eq(3)
    expect(count_perms_in_mid_range_noninclusive(3,16)).to eq(3)
    expect(count_perms_in_mid_range_noninclusive(4,16)).to eq(3)

    expect(count_perms_in_mid_range_noninclusive(2,17)).to eq(4)
    expect(count_perms_in_mid_range_noninclusive(2,16)).to eq(4)

    expect(count_perms_in_mid_range_noninclusive(10,67)).to eq(16)
    expect(count_perms_in_mid_range_noninclusive(10,67)).to eq(16)
    expect(count_perms_in_mid_range_noninclusive(16,67)).to eq(16)

    expect(count_perms_in_mid_range_noninclusive(3,70)).to eq(19)
    expect(count_perms_in_mid_range_noninclusive(4,64)).to eq(19)
    expect(count_perms_in_mid_range_noninclusive(16,64)).to eq(16)
  end
end

describe "#count_perms_in_initial_range_noninclusive" do

  it "returns 0 when no initial range exists" do
    expect(count_perms_in_initial_range_noninclusive(13,15)).to eq(0)
    expect(count_perms_in_initial_range_noninclusive(32,63)).to eq(0)
    expect(count_perms_in_initial_range_noninclusive(71,120)).to eq(0)


    expect(count_perms_in_initial_range_noninclusive((2**30),(2**31 - 1))).to eq(0)
    expect(count_perms_in_initial_range_noninclusive((2**30 + 1),(2**31 - 1))).to eq(0)
    expect(count_perms_in_initial_range_noninclusive((2**30 + 1),(2**31))).to eq(0)

    expect(count_perms_in_initial_range_noninclusive(9223372036854770000,9223372036854775000)).to eq(0)
  end
  #
  # it 'returns correct value when num1 and num2 are consecutive binary bases' do
  #   expect(count_perms_in_initial_range_noninclusive(32,64)).to eq(11)
  #   expect(count_perms_in_initial_range_noninclusive(2**30, 2**31)).to eq(161568281)
  # end
  #
  # it "returns correct value on standard input" do
  #   expect(count_perms_in_initial_range_noninclusive(3,31)).to eq(3)
  #   expect(count_perms_in_initial_range_noninclusive(3,16)).to eq(3)
  #   expect(count_perms_in_initial_range_noninclusive(4,16)).to eq(3)
  #
  #   expect(count_perms_in_initial_range_noninclusive(2,17)).to eq(4)
  #   expect(count_perms_in_initial_range_noninclusive(2,16)).to eq(4)
  #
  #   expect(count_perms_in_initial_range_noninclusive(10,67)).to eq(16)
  #   expect(count_perms_in_initial_range_noninclusive(10,67)).to eq(16)
  #   expect(count_perms_in_initial_range_noninclusive(16,67)).to eq(16)
  #
  #   expect(count_perms_in_initial_range_noninclusive(3,70)).to eq(19)
  #   expect(count_perms_in_initial_range_noninclusive(4,64)).to eq(19)
  #   expect(count_perms_in_initial_range_noninclusive(16,64)).to eq(16)
  # end
end
