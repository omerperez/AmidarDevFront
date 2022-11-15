import { ChangeEvent } from "react";
import { Button, Card, Grid } from "@mui/material";
import GenericDialog from "../Global/GenericDialog";
import Input from "../Global/Input";
import SelectInput from "../Global/Select";
import TextAreaInputRef from "../Global/TextArea";
import SubPagesTitle from "./SubPageTitle";
import SummaryVisit from "./SummaryVisit";

const demo = [
  {
    label: "שינויים בהרכב המשפחה",
    value: "אין",
    type: "select",
  },
  {
    label: "האם גר/ה בגפו/ה",
    value: "בחירה",
    type: "select",
  },
  {
    label: "חתם על תצהיר גר בגפו",
    value: "בחירה",
    type: "select",
  },
  {
    label: "הסכמה לעבור לדירה קטנה",
    value: "בחירה",
    type: "select",
  },
  {
    label: "מעבר אזרח ותיק",
    value: "בחירה",
    type: "select",
  },
  {
    label: "שפת הביקור",
    value: "01 עברית",
    type: "select",
  },
  {
    label: "נכח מתרגם",
    value: "לא",
    type: "select",
  },
  {
    label: "שם הדייר החותם",
    value: "כהן גינה",
    type: "input",
  },
  {
    label: "מהות הדייר הנוכח בדירה",
    value: "בחירה",
    type: "select",
  },
  {
    label: "תעודת זהות מתרגם",
    value: "209543214",
    type: "input",
  },
  {
    label: "הערות לביקור",
    value: "בלה בלה בלה בלה בלה בלה",
    type: "textArea",
  },
];

export default function LastStep() {
  return (
    <div className="section-general">
      <SubPagesTitle title="סיכום הביקור" fontSize="32" />
      <Card className="white-box">
        <Grid container spacing={1} className="mb-20 mt-10">
          {demo.map((item, key) => (
            <Grid item sm={item.type === "textArea" ? 12 : 2.4} key={key}>
              {item.type === "select" ? (
                <SelectInput
                  list={demo}
                  name={item.label}
                  label={item.label}
                  style={{ background: "white" }}
                />
              ) : item.type === "textArea" ? (
                <TextAreaInputRef
                  title={item.label}
                  value={item.value}
                  name={item.label}
                  minRow={5}
                  required={false}
                />
              ) : (
                <Input
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    console.log("omer")
                  }
                  label={item.label}
                  isShowLabel={false}
                  readOnly={false}
                  variant={"outlined"}
                  value={"209543214"}
                />
              )}
            </Grid>
          ))}
          <div style={{ margin: "30px auto 0 auto ", marginTop: 10 }}>
            <GenericDialog
              children={
                <Button className="paymant-btn" variant="contained">
                  סיים ביקור
                </Button>
              }
              closeBtn={true}
              fullSize={true}
              //   content={<PrinterWrapper children={<SummaryVisit />} />}
              content={<SummaryVisit />}
            />
          </div>
        </Grid>
      </Card>
    </div>
  );
}
