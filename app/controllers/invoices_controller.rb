class InvoicesController < ApplicationController
  def index
    @invoices = Invoice.all
  end

  def create
  end

  def show; end

  def update
  end

  def destroy
  end

  private

  def invoice_params
    params.require(:invoice).permit(:title, :amount, :reccurring,
                                    :customer_email, :description, :status)
  end

  def set_invoice
    @invoice = Invoice.find(params[:id])
  end
end
