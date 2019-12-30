class InvoicesController < ApplicationController
  def index
    @invoices = Invoice.all
    render json: @invoices
  end

  def create
    @invoice = current_user.invoice.build(invoice_params)
    if @Invoice.save
      render json: @Invoice, status: :ok
    else
      render json:{ error: "failed to save"}, status: :unprocessable_entity
    end
  end

  def show; end

  def update
  end

  def destroy
    if @invoice.destroy
      render json: @Invoice, status: :ok
    else
      render json: {error: 'unable to delete'}, status: :unprocessable_entity
    end
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
