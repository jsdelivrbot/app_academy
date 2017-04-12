class Api::BenchesController < ApplicationController
  def index
    @benches = params[:bounds] ? Bench.in_bounds(params[:bounds]) : Bench.all
    render :index
  end

  def create
    @bench = Bench.create!(bench_params)
    render :show
  end

  def show
    @bench = Bench.find(params[:id])
  end

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
