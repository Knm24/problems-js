<script>
  let cardNumber = '';
  let CardholderName = '';
  let expirationDateMM = '';
  let expirationDateYY = '';
  let cvv = '';
  let errorValidation = '';
  let successValidation = '';

  let CardholderNameError = '';
  let cardNumberError = '';
  let expirationDateMMError = '';
  let expirationDateYYError = '';
  let cvvError = '';

  const handleConfirm = () => {
    console.log('RUN validation');

    emptyErrors();

    if (!CardholderName.trim()) {
      CardholderNameError = 'Can’t be blank';
    }

    if (!cardNumber.trim()) {
      cardNumberError = 'Can’t be blank';
    } else if (!isValidCardNumber(cardNumber)) {
      cardNumberError = 'Wrong format, numbers only';
    }

    if (!expirationDateMM.trim()) {
      expirationDateMMError = 'Can’t be blank';
    } else if (!isValidExpirationDateMM(expirationDateMM)) {
      expirationDateMMError = 'Wrong format, numbers only';
    }

    if (!expirationDateYY.trim()) {
      expirationDateYYError = 'Can’t be blank';
    } else if (!isValidExpirationDateYY(expirationDateYY)) {
      expirationDateYYError = 'Wrong format, numbers only';
    }

    if (!cvv.trim()) {
      cvvError = 'Can’t be blank';
    } else if (!isValidCVV(cvv)) {
      cvvError = 'Wrong format, numbers only';
    }
  };

  const isValidCardNumber = (number) => {
    return /^\d{16}$/.test(number);
  };

  const isValidExpirationDateMM = (date) => {
    return /^\d{2}$/.test(date);
  };
  const isValidExpirationDateYY = (date) => {
    return /^\d{2}$/.test(date);
  };
  const isValidCVV = (date) => {
    return /^\d{3}$/.test(date);
  };
  const emptyErrors = () => {
    CardholderNameError = '';
    cardNumberError = '';
    expirationDateMMError = '';
    expirationDateYYError = '';
    cvvError = '';
  };
</script>

<p class="sucsuccessValidation">{successValidation}</p>

<div class="preview">
  <div class="cvv">{cvv}</div>
  <div class="cardNumber">{cardNumber}</div>
  <div class="CardholderName">{CardholderName}</div>
  <div class="expirationDate">
    {expirationDateMM}/{expirationDateYY}
  </div>
</div>

<form on:submit|preventDefault={handleConfirm}>
  <label>
    Cardholder Name:
    <input
      bind:value={CardholderName}
      type="text"
      placeholder="e.g. Jane Appleseed"
    />
    <p class="errorValidation">{CardholderNameError}</p>
  </label>

  <label>
    Card Number:
    <input
      bind:value={cardNumber}
      type="text"
      placeholder="e.g. 1234 5678 9123 0000"
    />
    <p class="errorValidation">{cardNumberError}</p>
  </label>

  <label>
    Exp. Date (MM/YY):
    <input
      class="expirationDate"
      bind:value={expirationDateMM}
      type="text"
      placeholder="MM"
    />
    <p class="errorValidation">{expirationDateMMError}</p>

    <input
      class="expirationDate"
      bind:value={expirationDateYY}
      type="text"
      placeholder="YY"
    />
    <p class="errorValidation">{expirationDateYYError}</p>
  </label>

  <label>
    CVV:
    <input bind:value={cvv} type="text" placeholder="e.g. 123" />
    <p class="errorValidation">{cvvError}</p>
  </label>

  <button type="submit">Confirm</button>
</form>

<style>
  .preview {
    width: 27.9375rem;
    height: 15.3125rem;
    border-radius: 0.625rem;
    background: linear-gradient(164deg, #6348fe 4.74%, #610595 88.83%);
  }

  .preview .cvv {
    color: var(--White, #fff);
    text-align: right;
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Space Grotesk;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    border-radius: 0.25rem;
    background: #adb5be;
  }
  .preview .cardNumber {
    color: var(--White, #fff);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Space Grotesk;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.21388rem;
  }
  .preview .CardholderName {
    color: var(--White, #fff);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Space Grotesk;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
  }
  .preview .expirationDate {
    color: var(--White, #fff);
    text-align: right;
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Space Grotesk;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
  }

  label {
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    color: var(--Deep-Violet, #21092f);
    font-feature-settings:
      'clig' off,
      'liga' off;

    font-family: Space Grotesk;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
  }

  input {
    margin: 0.5rem 0;
    color: var(--Deep-Violet, #21092f);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Space Grotesk;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  input {
    border-radius: 0.5rem;
    border: 1px solid var(--Light-Grey, #dfdee0);
    background: var(--White, #fff);
    padding: 1rem;
  }

  ::placeholder {
    color: var(--Deep-Violet, #21092f);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Space Grotesk;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.25;
  }

  button {
    border-radius: 0.5rem;
    background: var(--Deep-Violet, #21092f);
    border: none;
    cursor: pointer;
    color: var(--White, #fff);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Space Grotesk;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  button:hover {
    color: #ddd;
  }

  .expirationDate {
    width: 5rem;
    height: 2.8125rem;
    flex-shrink: 0;
  }

  .errorValidation {
    color: var(--Red, #ff5050);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Space Grotesk;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .successValidation {
    color: var(--Green, green);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Space Grotesk;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
</style>
