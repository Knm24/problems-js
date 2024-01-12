<script>
  let cardNumber = '';
  let CardholderName = '';
  let expirationDateMM = '';
  let expirationDateYY = '';
  let cvv = '';
</script>

<div class="preview">
  <div class="cvv">{cvv}</div>
  <div class="cardNumber">{cardNumber}</div>
  <div class="CardholderName">{CardholderName}</div>
  <div class="expirationDate">
    {expirationDateMM}/{expirationDateYY}
  </div>
</div>

<form on:submit>
  <label>
    Cardholder Name:
    <input
      bind:value={CardholderName}
      type="text"
      placeholder="e.g. Jane Appleseed"
    />
  </label>

  <label>
    Card Number:
    <input
      bind:value={cardNumber}
      type="text"
      placeholder="e.g. 1234 5678 9123 0000"
    />
  </label>

  <label>
    Exp. Date (MM/YY):
    <input bind:value={expirationDateMM} type="text" placeholder="MM" />
    <input bind:value={expirationDateYY} type="text" placeholder="YY" />
  </label>

  <label>
    CVV:
    <input bind:value={cvv} type="text" placeholder="e.g. 123" />
  </label>

  <button type="submit">Confirm</button>
</form>
