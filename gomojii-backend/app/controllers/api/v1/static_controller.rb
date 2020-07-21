class Api::V1::StaticController < ApplicationController
     def home
          render json: {status: "Working app"}
     end
end
