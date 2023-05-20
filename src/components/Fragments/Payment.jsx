import Paypall from "../../assets/img/braintree_paypal.svg";
import Checkout from "../../assets/img/checkout.svg";
import Ovo from "../../assets/img/dlocal_ovo_wallet.svg";
import Dana from "../../assets/img/dlocal_dana_wallet.svg";
import LinkAja from "../../assets/img/dlocal_link_aja_wallet.svg";
import QRIS from "../../assets/img/dlocal_qris_wallet.svg";
import Bank from "../../assets/img/dlocal_bank_transfer.svg";
import Flip from "../../assets/img/dlocal_flip.svg";

const Payment = () => {
    return(
        <section className="payment mt-10 bg-white md:mt-14 lg:mt-24">
            <div className="container mx-auto px-5 md:px-0 lg:px-32">
              <div className="payment-list flex flex-wrap items-center justify-center py-3">
                <img className="w-10 mx-2" src={Paypall} alt="" />
                <img className="w-10 mx-2" src={Checkout} alt="" />
                <img className="w-10 mx-2" src={Ovo} alt="" />
                <img className="w-10 mx-2" src={Dana} alt="" />
                <img className="w-10 mx-2" src={LinkAja} alt="" />
                <img className="w-10 mx-2" src={QRIS} alt="" />
                <img className="w-10 mx-2" src={Flip} alt="" />
                <img className="w-10 mx-2" src={Bank} alt="" />
              </div>
            </div>
          </section>
    )
}

export default Payment;