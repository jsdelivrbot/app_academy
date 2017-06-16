require 'byebug'
require 'base_helpers'
require 'mid_helpers'

describe "#count_perms_in_mid_range_noninclusive" do
  it "handles base case" do
  end
  it "returns correct value when no mid range exists" do
    #count_perms_in_mid_range_noninclusive(2,16)# == 9
    expect(count_perms_in_mid_range_noninclusive(13,15)).to eq(9)
    expect(count_perms_in_mid_range_noninclusive(9223372036854770000,9223372036854775000)).to eq(9)
  end
  it "returns correct value when one edge is base binary" do
    #count_perms_in_mid_range_noninclusive(2,16)# == 9
    # expect(count_perms_in_mid_range_noninclusive(2,16)).to eq(9)
  end
  it "returns correct value" do
  end
end


#count_perms_in_mid_range_noninclusive(2,17)# == 9

#count_perms_in_mid_range_noninclusive(4,16)# == 9
#count_perms_in_mid_range_noninclusive(3,17)# == 9
#count_perms_in_mid_range_noninclusive(3,31)# == 9
#

#count_perms_in_mid_range_noninclusive(10,67)# == 20
#count_perms_in_mid_range_noninclusive(16,64)# == 20
#

#count_perms_in_mid_range_noninclusive(3,70)# == 20
#count_perms_in_mid_range_noninclusive(4,64)# == 20
#

#count_perms_in_mid_range_noninclusive(32,64)# == 11
#count_perms_in_mid_range_noninclusive(32,65)# == 11
