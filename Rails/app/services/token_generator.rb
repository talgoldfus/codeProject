require 'openssl'
require 'date'
require 'base64'

class TokenGenerator
  def self.gen_token()
      digest = OpenSSL::Digest.new('sha256')
      secret = 'pv4wliulqo39jhqn'
      time_created = Time.now.to_i * 1000 # convert to ms
      hmac = OpenSSL::HMAC.digest(digest, secret, time_created.to_s)
      token = {
          msg_mac: Base64.encode64(hmac).strip,
          time_created: time_created
      }
  end
end
