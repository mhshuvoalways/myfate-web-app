import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = () => {
  return (
    <div className="w-full sm:w-6/12">
      <PayPalScriptProvider
        options={{
          "client-id": import.meta.env.VITE_CLIENT_ID,
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: 10,
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order
              .capture()
              .then(() => {
                console.log("thanks for payment");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default Paypal;
