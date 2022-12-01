import { Checkbox, Grid } from "@mui/material";
import { Stack } from "@mui/system";

const items = [
  {
    label: "הסכמה לעבור לדירה קטנה",
    value: " - ",
  },
  {
    label: "מעבר אזרח ותיק",
    value: " - ",
  },
  {
    label: "מהות הדייר הנוכחי בדירה",
    value: " ",
  },
];

const checkboxes = [
  `הנני מסכים כי עמידר תהיה רשאית להשתמש במידע המצוי ברשותה אודותיי ואודות משפחתי לצורך קידום פעילויות למתן שירותים וסיוע בתחומי רווחה, חינוך, קשרי קהילה והתחדשות עירונית, לרבות שיתופי פעולה עם גורמים אחרים, ולשם כך עמידר תהיה רשאית להעביר את המידע כאמור לגורמים הנ"ל.`,
  `אני מאשר בחתימתי את כל הנתונים שבסיכום זה לאחר שקראתי והבנתי אותו.`,
  `אישור המנהל תיק לקוח: בדקתי את נתוני הכתובת ואני מאשר את הנתונים`,
];

export default function Approvals() {
  return (
    <div className="summary-box">
      <div className="summary-sub-title">
        <span className={`table-title`}>אישורים</span>
      </div>
      <Grid container>
        {items.map((item, index) => (
          <Grid item sm={4} key={`approvals-item-${index}`}>
            <span className="maintenance-first-label">{`${item.label}:`}</span>
            <span className="sammary-font-medium">{item.value}</span>
          </Grid>
        ))}
      </Grid>
      <div className="mt-10 mb-20">
        <span className="sammary-font-small">
          ידוע לי כי המידע הכלול במסמך זה וכן כל מידע אחר הנצבר אודותיי ואודות
          בני משפחתי ע"י עמידר, ישמר וינוהל ע"י עמידר ו/או מטעמה, בין היתר,
          במאגרי מידע עפ"י דין, וכי עמידר תהיה רשאית להשתמש במידע הנ"ל לצורך
          ביצוע תפקידיה כחברה לדיור ציבורי עפ"י דין ולמתן פתרונות דיור, וכן
          להעביר מידע זה למשרד הבינוי והשיכון / למשרד העליה והקליטה לצורך ביצוע
          תפקידיה כאמור.
        </span>
      </div>
      {checkboxes.map((checkbox, index) => (
        <Stack direction={"row"} key={`approvals-checkboxes-${index}`}>
          <Checkbox size="small" />
          <div className="mt-5">
            <span className="sammary-font-small">{checkbox}</span>
          </div>
        </Stack>
      ))}
      <div className="mt-10 maintenance-first-label">
        <span>* לקוח עודכן שבאפשרותו להגיש בקשה עקב צפיפות מונגשת</span>
      </div>
    </div>
  );
}
