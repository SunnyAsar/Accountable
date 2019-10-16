class ApplicationController < ActionController::Base
  before_action :sanitize_data, if: :devise_controller?

  private

  def sanitize_data
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name])
    devise_parameter_sanitizer.permit(:acccount_update, keys: [:first_name, :last_name])
  end
end
