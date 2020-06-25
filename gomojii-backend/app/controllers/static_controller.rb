class StaticController < ApplicationController
     def home
          render json: {status: "Working app"}
     end
end
