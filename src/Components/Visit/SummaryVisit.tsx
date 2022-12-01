import { Grid } from "@mui/material";
import { useRef } from "react";
import SignaturePad from "react-signature-pad-wrapper";
import { TEXTS, TITLES } from "../../Assets/Constants/VisitConstants";
import {
  ApartmentDetailsColumns,
  ApartmentDetailsDemoValues,
  OccupancyDetailsColumns,
  OccupancyDetailsDemoValues,
  PaymentDetailsColumns,
  PaymentDetailsDemoValues,
  TenantsDetailsColumns,
  TenantsDetailsDemoValues,
} from "../../Assets/Visit/SummaryVisit";
import SubPagesTitle from "./SubPageTitle";
import Approvals from "./SummaryVisit/Approvals";
import GenericTable from "./SummaryVisit/GenericTable";
import MaintenanceSummary from "./SummaryVisit/MaintenanceSummary";

const demoValues = [
  "שם הדייר: ילנה גוליק",
  "חתימת מנהל תיק לקוח",
  "חתימת מתרגם",
];

export default function SummaryVisit() {
  const signatureRef = useRef<any>(null);

  const labels = [
    {
      label: "שם מנהל תיק לקוח: ",
      value: "Y8271 אריאלה נדלר",
      md: 5,
    },
    {
      label: "תאריך הביקור: ",
      value: "13/11/2022",
      md: 3.5,
    },
    {
      label: "שעה: ",
      value: "14:30",
      md: 3.5,
    },
  ];
  return (
    <div>
      {/* <div className="page"> */}
      <div className="flex-center">
        <SubPagesTitle title="סיכום ביקור" fontSize="22" />
      </div>
      <Grid container>
        {labels.map((item, index) => (
          <Grid
            item
            md={item.md}
            className="text-start"
            key={`summary-visit-label-${index}`}
          >
            <b className="sammary-font">{item.label}</b>
            <span className="sammary-font">{item.value}</span>
          </Grid>
        ))}
      </Grid>
      <GenericTable
        tableTitle={TITLES.APARTMENT_DETAILS}
        columns={ApartmentDetailsColumns}
        rows={ApartmentDetailsDemoValues}
      />
      <GenericTable
        tableTitle={TITLES.OCCUPANCY_DETAILS}
        columns={OccupancyDetailsColumns}
        rows={OccupancyDetailsDemoValues}
        gridSize={1}
      />
      <GenericTable
        tableTitle={TITLES.TENANTS_DETAILS}
        columns={TenantsDetailsColumns}
        rows={TenantsDetailsDemoValues}
        gridSize={2.4}
      />
      <GenericTable
        tableTitle={TITLES.NISMACH_DETAILS}
        columns={TenantsDetailsColumns}
        rows={TenantsDetailsDemoValues}
        gridSize={2.4}
      />
      <div>
        <b className="maintenance-first-label">{TEXTS.SUMMERY_COMMENT}</b>
        <span className="sammary-font-medium">
          דירה מתוחזקת, הלקוחה מעוניינת למכור
        </span>
      </div>
      <GenericTable
        tableTitle={TITLES.COLLECTION_DETAILS}
        columns={PaymentDetailsColumns}
        rows={PaymentDetailsDemoValues}
        gridSize={1.2}
      />
      <MaintenanceSummary />
      <Approvals />
      <Grid container className="mt-10">
        {demoValues.map((value, index) => (
          <Grid
            item
            sm={4}
            className="text-center"
            key={`summary-visit-value-${index}`}
          >
            <div className="signature-container-summary">
              <SignaturePad
                width={120}
                height={120}
                redrawOnResize
                ref={signatureRef}
                options={{ maxWidth: 1, minWidth: 1, penColor: "black" }}
              />
            </div>
            <br />
            <span className="maintenance-first-label text-center">{value}</span>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
