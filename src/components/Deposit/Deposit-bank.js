import { useState, useEffect } from "react";
import "./BankDeposit.css";
import "../../styles/user-page/Modals.css";
import miniVault from "../../images/Mini-Vault.png";
import DepVault from "./modals/DepVault";
import CreateDeposit from "./modals/CreateDeposit";
import { useDispatch, useSelector } from "react-redux";
import { getDepositsThunk } from "../../services/deposits";
import { depositsSliceActions } from "../../store/slices/deposit.slice";

const DepositBank = function ({ onClose }) {
  const { deposits, accumulated } = useSelector((state) => state.deposit);
  const [vaultModal, setVaultModal] = useState(false);
  const [createDeposit, setCreateDeposit] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDepositsThunk());
  }, [dispatch]);

  const openVault = (vault) => {
    dispatch(depositsSliceActions.setCurrentVault(vault));
    setVaultModal(!vaultModal);
  };

  return (
    <div className="op-modal modal-deposit-bank">
      <button className="btn--close-modal" onClick={() => onClose()}>
        &times;
      </button>
      <div className="amount deposit-amount">
        <span className="dep-title">In Vaults</span>
        {accumulated} ₴
      </div>
      <div className="screen screen-deposit-bank">
        <div className="pig-controls">
          <button
            onClick={() => setCreateDeposit(!createDeposit)}
            className="btn pig-btn"
          >
            <p className="btn-icon dep-icon">+</p> Create
          </button>
        </div>
        <h2 className="banka-title">Deposits</h2>

        <div className="vaults">
          {deposits.map((deposit, index) => (
            <div
              key={index}
              className="vault__row"
              onClick={() => openVault(deposit)}
            >
              <div>
                <div className="vault-icon">
                  <img
                    src={miniVault}
                    alt="banka"
                    className="img-small-vault"
                  />
                </div>
              </div>
              <div className="banka-info">
                <p className="banka-name">Deposit 💵📈</p>
                <p className="target_value">{deposit.amount} ₴</p>
                <p className="accum_value">
                  Dividends: {deposit?.monthly_payment?.toFixed(2)} ₴ / mnth
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {vaultModal && <DepVault onClose={() => setVaultModal(!vaultModal)} />}
      {createDeposit && (
        <CreateDeposit onClose={() => setCreateDeposit(!createDeposit)} />
      )}
    </div>
  );
};

export default DepositBank;
