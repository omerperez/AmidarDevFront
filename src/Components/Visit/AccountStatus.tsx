import { useContext } from "react";
import { Fragment } from "react";
import SubPageTitle from "./SubPageTitle";
import { Button, Grid } from "@mui/material";
import { accountStatusProperties } from "../../Assets/Visit";
import { contexts } from "../../Contexts/ContextsExports";
export default function AccountStatus() {
  const openAmidarPaymentForm = () => {
    window.open(process.env.REACT_APP_AMIDAR_PAYMENT_API);
  };

  const { visitState } = useContext(contexts.Visit);

  return (
    <div className="section-general ">
      <SubPageTitle title={"מצב חשבון"} fontSize={"32"} />
      <div className="section-content white-box">
        <Grid container spacing={2}>
          {accountStatusProperties.map((item, index) => (
            <Fragment key={`AccountStatusFragment-${index}`}>
              {item.flag && <Grid item md={item.gridExtra} />}
              <Grid
                item
                md={3}
                key={`account-status-field=${item.label}-${index}`}
              >
                <div className="label-pos">
                  <span className="card-body-text-label">{item.label}</span>
                </div>
                <span className="card-body-text-value">{`${
                  visitState.paymentDetails[item.name]
                }`}</span>
              </Grid>
            </Fragment>
          ))}
          <Grid item md={3} className="text-end">
            <Button
              className="paymant-btn"
              variant="contained"
              onClick={openAmidarPaymentForm}
            >
              לחץ לתשלום
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
