require 'test_helper'

class Api::UserControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_user_create_url
    assert_response :success
  end

end
