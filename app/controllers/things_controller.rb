class v1::ThingsController < ApplicationController
  def index
    render json: { :things => [
      {thing: 'somthign', kind: 'unknown' }
    ]}.to_json
  end
end
