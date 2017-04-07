require 'test_helper'

class SessionsControllerTest < ActionDispatch::IntegrationTest

  def setup
    @user = users(:example)
  end

  test "login page" do
    get login_url
    assert_response :success
  end

  test "invalid login" do
    post login_url, params: { session: { name: @user.name,
                                         password: "" } }
    assert_response :success
    assert_template 'new'
  end

  test "valid login and logout" do
    post login_url, params: { session: { name: @user.name,
                                         password: "password" } }
    assert is_logged_in?
    assert_redirected_to messages_url
    delete logout_url
    assert_not is_logged_in?
    assert_redirected_to login_url
  end
end

