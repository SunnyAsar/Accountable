class AccountsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_account, only: :destroy

  def index
    @account = current_user.accounts.take(15)
    render json: @account
  end

  def create
    @account = current_user.accounts.build(account_params)
    if @account.save
      render json: @account.to_json, status: :ok
    else
      render json: { error: 'something went wrong' }, status: :unprocessable_entity
    end
  end

  def update;end

  def destroy
    if @account.destroy
      render json: @account.to_json, status: :ok
    else
      render json: { error: 'something went wrong' }, status: :unprocessable_entity
    end
  end

  private

  def account_params
    params.require(:account).permit(:title, :account_type, :date, :amount, :description)
  end

  def set_account
    @account = Account.find(params[:id])
  end
end
