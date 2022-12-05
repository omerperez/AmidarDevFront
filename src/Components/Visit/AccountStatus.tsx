import { Button, Grid } from "@mui/material";
import { Fragment, useContext } from "react";
import { accountFields } from "../../Assets/Visit/AccountStatus";
import { contexts } from "../../Contexts/ContextsExports";
import { PaymentAccount } from "../../Data/Builders/Visit";
import { VisitContextType } from "../../Data/Types/Visit";
import FieldValue from "./FiledValue";
import SubPageTitle from "./SubPageTitle";

const openPaymentWebsite = () => {
  window.open(process.env.REACT_APP_AMIDAR_PAYMENT_API);
};

export default function AccountStatus() {
  const { visitState } = useContext(contexts.Visit) as VisitContextType;

  const title = "מצב חשבון";
  const btnText = "לחץ לתשלום";

  return (
    <div>
      <SubPageTitle title={title} fontSize={"32"} />
      <div className="white-box">
        <Grid container spacing={4} className="payment-padding">
          {accountFields.map((item, index) => (
            <Fragment key={`AccountStatusFragment-${index}`}>
              <Grid
                item
                md={item.gridSize}
                key={`account-status-field-${item.label}-${index}`}
              >
                <FieldValue
                  label={item.label}
                  value={
                    visitState.paymentDetails[item.name as keyof PaymentAccount]
                  }
                />
              </Grid>
            </Fragment>
          ))}
          <Grid item md={3} className="text-end">
            <Button
              className="paymant-btn"
              variant="contained"
              onClick={openPaymentWebsite}
            >
              {btnText}
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
