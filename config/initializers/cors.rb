Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3000'

    resource '*',
      headers: :any,
			methods: [:get, :post, :put, :patch, :delete, :options, :head],
			# Cookieを利用する場合は、「credentials: true」を追記
      credentials: true
  end
end
