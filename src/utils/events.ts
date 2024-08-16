declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

type Payload = {
  cashback_rub: string;
  cashback_mil: string;
  transfers: string;
  aeroports: string;
  insurance: 1 | 0;
  money_transfer: 1 | 0;
  atm: 1 | 0;
  concierge: 1 | 0;
  stiker: 1 | 0;
  metal_card: 1 | 0;
  savings_account: 1 | 0;
};

export const sendDataToGA = async (data: Payload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      'https://script.google.com/macros/s/AKfycbxoXM_E18uUUad3n-fhSG29v5qlDVLuS7yn0RKaTKoLxmmMId6dEwZEQVvNUWE7UtSEDg/exec',
      {
        redirect: 'follow',
        method: 'POST',
        body: JSON.stringify({ date, ...data, variant: 'variant1' }),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      },
    );
  } catch (error) {
    console.error('Error!', error);
  }
};
