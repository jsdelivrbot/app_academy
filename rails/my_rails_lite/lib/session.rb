require 'json'

class Session
  attr_accessor :session_cookie
  # find the cookie for this app
  # deserialize the cookie into a hash
  def initialize(req)
    cookie = req.cookies["_rails_lite_app"]
    @session_cookie = cookie.nil? ? {} : JSON.parse(cookie)
  end

  def [](key)
    @session_cookie[key]
  end

  def []=(key, val)
    @session_cookie[key] = val
  end

  # serialize the hash into json and save in a cookie
  # add to the responses cookies

  def store_session(res)
    self[:value] = @session_cookie.to_json
    self[:name] = '_rails_lite_app'
    self[:path] = "/"
    res.set_cookie(self[:name], self[:value])
  end
end
