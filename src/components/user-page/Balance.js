import '../../styles/user-page/Balance.css'

const Balance = function () {
    return (
      <div class="balance">
        <div>
          <p class="balance__label">Current balance:</p>
        </div>
        <p class="balance__value">1000.00₴</p>
      </div>
    );
}

export default Balance;