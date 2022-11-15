import { Grid } from "@mui/material";
import { maintenanceLabel } from "../../../Assets/Visit/SummaryVisit";

const items = [
  {
    label: "חימום מים:",
    value: "חימום עם גז",
  },
  {
    label: "סוג חימום מים נוסף:",
    value: "אין",
  },
  {
    label: `החלה בנייה תמ"א 38:`,
    value: "-",
  },
  {
    label: "חדר ביטחון:",
    value: `ממ"ד`,
  },
];

const labels = ["פריט/ים לבדיקה", "ציון", "תיאור", "הערות"];

export default function MaintenanceSummary() {
  return (
    <div className="summary-box">
      <div className="summary-sub-title">
        <span className={`table-title`}>{"ביקור אחזקה"}</span>
      </div>

      <Grid container spacing={3}>
        {items.map((item, index) => (
          <Grid item sm={3} key={`main-section-${item.label + index}`}>
            <span className="maintenance-first-label">{item.label}</span>
            <span className="sammary-font-medium">{item.value}</span>
          </Grid>
        ))}
        <span className="mt-5 maintenance-first-label">
          * תיקונים במידת הצורך יבוצעו בהתאם למסגרת התקציב
        </span>
      </Grid>
      <div className="mt-5">
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <Grid container>
              {labels.map((label, key) => (
                <Grid
                  item
                  sm={key === 0 ? 6 : 2}
                  className={key === 0 ? "text-start" : "text-center"}
                  key={`first-part-label-${label}`}
                >
                  <span className="maintenance-first-label">{label}</span>
                </Grid>
              ))}
            </Grid>
            {maintenanceLabel.firstPart.map((label, index) => (
              <Grid
                container
                className="mt-5 sammary-font-medium text-center"
                key={`first-part-values-${label}`}
              >
                <Grid item sm={6} className="text-start">
                  {label}
                </Grid>
                <Grid item sm={2}>
                  5
                </Grid>
                <Grid item sm={2}>
                  -
                </Grid>
                <Grid item sm={2}>
                  -
                </Grid>
              </Grid>
            ))}
            {maintenanceLabel.otherFirstPart.map((label, key) => (
              <Grid
                container
                className="mt-5 sammary-font-medium text-center"
                key={`first-other-part-values-${label}`}
              >
                <Grid item sm={6} className="text-start">
                  {label}
                </Grid>
                <Grid item sm={2}>
                  5
                </Grid>
                <Grid item sm={4}>
                  -
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item sm={6}>
            <Grid container>
              {labels.map((label, key) => (
                <Grid
                  item
                  sm={key === 0 ? 6 : 2}
                  className={key === 0 ? "text-start" : "text-center"}
                  key={`second-part-labels-${label}`}
                >
                  <span className="maintenance-first-label">{label}</span>
                </Grid>
              ))}
            </Grid>
            {maintenanceLabel.secondPart.map((label, index) => (
              <Grid
                container
                className="mt-5 sammary-font-medium text-center"
                key={`second-part-values-${label}`}
              >
                <Grid item sm={6} className="text-start">
                  {label}
                </Grid>
                <Grid item sm={2}>
                  5
                </Grid>
                <Grid item sm={2}>
                  -
                </Grid>
                <Grid item sm={2}>
                  -
                </Grid>
              </Grid>
            ))}
            {maintenanceLabel.otherSecondPart.map((label, key) => (
              <Grid
                container
                className="mt-5 sammary-font-medium text-center"
                key={`second-other-part-values-${label}`}
              >
                <Grid item sm={6} className="text-start">
                  {label}
                </Grid>
                <Grid item sm={2}>
                  5
                </Grid>
                <Grid item sm={4}>
                  -
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <div className="mt-10 maintenance-first-label">
          * 5 - תקין 4 - תקין אך ישן 3 - נדרש תחקון נקודתי 2 - לא תקין, נדרש
          טיפול מקיף 1 - לא ראוי למגורים
        </div>
      </div>
    </div>
  );
}
