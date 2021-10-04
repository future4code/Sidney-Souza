import { Payment } from "../../model/Payment";

export interface PurchaseRepository {
    findPaymentById(paymentId: string): Promise<Payment | undefined>,
    createPayment(newPayment: Payment): Promise<void>
};