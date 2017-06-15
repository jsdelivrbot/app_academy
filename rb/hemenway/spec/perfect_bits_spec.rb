require 'rspec'
require 'perfect_bits'

describe "base two <=> base ten conversion methods" do
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
      expect(next_perfect_bit(4)).to be(8)
      expect(next_perfect_bit(512)).to be(519)
      expect(next_perfect_bit(1099511627775)).to be(1099511627776)
    end
  end
end

describe "binary base helper methods" do
  describe "#prev_binary_base" do
    it "handles base cases" do
      expect(prev_binary_base(0)).to be(nil)
      expect(prev_binary_base(1)).to be(0)
      expect(prev_binary_base(2)).to be(1)
    end
    it "returns correct value with small input value" do
      expect(prev_binary_base(3)).to be(2)
      expect(prev_binary_base(4)).to be(2)
      expect(prev_binary_base(5)).to be(4)
      expect(prev_binary_base(2**10)).to eq(2**9)
    end
    it "returns correct value with large input value" do
      expect(prev_binary_base(2**2345 - 1)).to eq(2**2344)
      expect(prev_binary_base(2**2345)).to eq(2**2344)
      expect(prev_binary_base(2**2345 + 1)).to eq(2**2345)
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
    it "handles base case properly" do
      expect(next_binary_base(-1)).to eq(0)
    end
    it "returns correct value with small input value" do
      expect(next_binary_base(2**0)).to eq(2**1)
      expect(next_binary_base(2**9)).to eq(2**10)
    end
    it "returns correct value with large input value" do
      expect(next_binary_base(2**2345 - 1)).to eq(2**2345)
      expect(next_binary_base(2**2345)).to eq(2**2346)
      expect(next_binary_base(2**2345 + 1)).to eq(2**2346)
    end
  end

  describe "#initial_base_ten_binary_base_in_range" do
    it "returns correct value with edge inputs" do
      expect(initial_base_ten_binary_base_in_range(16, 20)).to eq(16)
      expect(initial_base_ten_binary_base_in_range(512, 9223372036854775807)).to eq(512)
      expect(initial_base_ten_binary_base_in_range(9223372036854775808, 9223372036854776000)).to eq(9223372036854775808)

      expect(initial_base_ten_binary_base_in_range(10, 16)).to eq(16)
      expect(initial_base_ten_binary_base_in_range(500, 512)).to eq(512)
      expect(initial_base_ten_binary_base_in_range(9223372036854775000, 9223372036854775808)).to eq(9223372036854775808)
    end

    it "returns nil when does not exist" do
      expect(initial_base_ten_binary_base_in_range(17, 20)).to be(nil)
      expect(initial_base_ten_binary_base_in_range(300, 511)).to be(nil)
      expect(initial_base_ten_binary_base_in_range(9223372036854775000, 9223372036854775807)).to be(nil)
    end

    it "returns correct value with standard inputs" do
      expect(initial_base_ten_binary_base_in_range(10, 20)).to eq(16)
      expect(initial_base_ten_binary_base_in_range(500, 9223372036854775807)).to eq(512)
      expect(initial_base_ten_binary_base_in_range(10, 9223372036854775807)).to eq(16)
    end
  end

  describe "#final_base_ten_binary_base_in_range" do
    it "handles base case properly" do
      # expect(next_binary_base(-1)).to eq(0)
    end
    it "returns correct value with small input value" do
      # expect(next_binary_base(2**0)).to eq(2**1)
      # expect(next_binary_base(2**9)).to eq(2**10)
    end
    it "returns correct value with large input value" do
      # expect(next_binary_base(2**2345 - 1)).to eq(2**2345)
      # expect(next_binary_base(2**2345)).to eq(2**2346)
      # expect(next_binary_base(2**2345 + 1)).to eq(2**2346)
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

  describe "#uniq_permutations_count" do
    # it "handles base case properly" do
    #   # expect(factorial(0)).to be(1)
    #   # expect(factorial(1)).to be(1)
    # end
    # it "returns correct value" do
    #   # expect(factorial(4)).to be(24)
    #   # expect(factorial(20)).to be(2432902008176640000)
    # end
  end

  describe "#uniq_permutations_count_w_set_ones_and_zeroes" do
    # it "handles base case properly" do
    #   # expect(factorial(0)).to be(1)
    #   # expect(factorial(1)).to be(1)
    # end
    # it "returns correct value" do
    #   # expect(factorial(4)).to be(24)
    #   # expect(factorial(20)).to be(2432902008176640000)
    # end
  end

  describe "#prev_permutations_count" do
    # it "handles base case properly" do
    #   # expect(factorial(0)).to be(1)
    #   # expect(factorial(1)).to be(1)
    # end
    # it "returns correct value" do
    #   # expect(factorial(4)).to be(24)
    #   # expect(factorial(20)).to be(2432902008176640000)
    # end
  end
end

describe "main methods" do
  describe "#count_perms_in_initial_range_noninclusive" do
    # it "handles base case properly" do
    #   # expect(factorial(0)).to be(1)
    #   # expect(factorial(1)).to be(1)
    # end
    # it "returns correct value" do
    #   # expect(factorial(4)).to be(24)
    #   # expect(factorial(20)).to be(2432902008176640000)
    # end
  end

  describe "#count_perms_in_mid_range_noninclusive" do
    # it "handles base case properly" do
    #   # expect(factorial(0)).to be(1)
    #   # expect(factorial(1)).to be(1)
    # end
    # it "returns correct value" do
    #   # expect(factorial(4)).to be(24)
    #   # expect(factorial(20)).to be(2432902008176640000)
    # end
  end
end

describe "#perfect_bits" do
  # it "handles base case properly" do
  #   # expect(factorial(0)).to be(1)
  #   # expect(factorial(1)).to be(1)
  # end
  # it "returns correct value" do
  #   # expect(factorial(4)).to be(24)
  #   # expect(factorial(20)).to be(2432902008176640000)
  # end
end
