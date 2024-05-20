import { useState, useEffect } from "react";
import "./Loan.css";
import '../../styles/user-page/Modals.css'
import miniVault from "../../images/loan-icon.svg";
import LoanVault from "./modals/LoanVault";
import CreateLoan from "./modals/CreateLoan";
import { useDispatch, useSelector } from "react-redux";
import { getLoansThunk } from "../../services/loans";

const Loan = function (props) {
  const { loan } = useSelector((state) => state.loans);
  const [createModal, setCreateModal] = useState(false);
  const [vaultModal, setVaultModal] = useState(false);
  const dispatch = useDispatch();

  const handleClose = function () {
    props.onClose();
  };

  useEffect(() => {
    dispatch(getLoansThunk());
  }, [dispatch]);

  return (
    <div className="op-modal modal-loan">
      <button className="btn--close-modal" onClick={handleClose}>
        &times;
      </button>
      <div className="amount loan-amount">
        <span className="pig-title">Need to Pay</span>
        {loan?.amount_to_pay} ₴
      </div>
      <div className="screen screen-loan">
        <div className="pig-controls">
          <button
            onClick={() => setCreateModal(!createModal)}
            className="btn pig-btn"
          >
            <p className="btn-icon loan-icon">+</p> Create
          </button>
        </div>
        <h2 className="banka-title">Active Loans</h2>
        <div className="vaults">
          {loan ? (
            <div
              className="vault__row"
              onClick={() => setVaultModal(!vaultModal)}
            >
              <div>
                <div className="loan-vault-icon">
                  <img src={miniVault} alt="banka" className="img-small-loan" />
                </div>
              </div>
              <div className="banka-info">
                <p className="banka-name">Loan 💵</p>
                <p className="target_value">{loan.amount} ₴</p>
                <p className="accum_value">
                  Payment: {loan.monthly_payment?.toFixed(2)} ₴ / month
                </p>
              </div>
            </div>
          ) : (
            <p
              className="alert"
              style={{ color: "lightgreen", fontSize: "18px" }}
            >
              You don't have any loans
            </p>
          )}
        </div>
      </div>
      {createModal && (
        <CreateLoan onClose={() => setCreateModal(!createModal)} />
      )}
      {vaultModal && <LoanVault onClose={() => setVaultModal(!vaultModal)} />}
    </div>
  );
};

export default Loan;
