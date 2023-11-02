import { CardPayment, initMercadoPago } from '@mercadopago/sdk-react';
import swal from 'sweetalert';

export function MercadoPago() {
  initMercadoPago('TEST-6f472cf3-9065-4597-9d22-e0bf1dfaeb70');

  const initialization = {
    amount: 100,
  };

  const onSubmit = async formData => {
    // console.log(formData)
    return new Promise((resolve, reject) => {
      fetch('/process_payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(response => {
          // console.log(response)
          if(response.ok) {
            responseOK()
          } else {
            responseBAD()
          }
          resolve();
        })
        .catch(error => {
          reject();
        });
    });
  };

  const onError = async error => {
    console.log(error);
  };

  const onReady = async () => {
    /*
      Callback llamado cuando Brick está listo.
      Aquí puedes ocultar cargamentos de su sitio, por ejemplo.
    */
  };


const responseOK = () => {
  swal("Good job!", "You clicked the button!", "success");
}

const responseBAD = () => {
  swal("AAAAAAAAAAAAAAAAAAAAAAAAH!", "33-12, tenemos un 33-12", "error");
}

  return (
    <div>
      <CardPayment
        initialization={initialization}
        onSubmit={onSubmit}
        onReady={onReady}
        onError={onError}
      />
    </div>
  );
}
