import React, { useState } from "react";
import { Grid } from "@mui/material";
import FormTitle from "./FormLayout/FormTitle";
import TenantPersonalDetails from "./FormLayout/TenantPersonalDetails";
import FormSignature from "./FormLayout/FormSignature";
import "./HtmlForms.css";

export default function LiveAlone() {
  const [ownerStatus, setOwnerStatus] = useState(false);

  return (
    <page size="A4" className="page-layout" dir="rtl">
      <Grid container spacing={0}>
        <FormTitle title={"הצהרה - גר בגפו"} />

        <TenantPersonalDetails
          firstName={"עומר"}
          lastName={"פרץ"}
          id={"209543214"}
          year={2020}
        />

        <Grid item xs={12} sm={12} md={12} className="mt-20 pl-5">
          <ol className="fancy_list" dir="rtl">
            <li>
              הנני מצהיר\ה כי:
              <b className="mouse-pointer">
                <span
                  onClick={() => setOwnerStatus(true)}
                  className={ownerStatus && "select-style"}
                >
                  {" יש "}
                </span>
                \
                <span
                  onClick={() => setOwnerStatus(false)}
                  className={!ownerStatus && "select-style"}
                >
                  {" אין "}
                </span>
              </b>
              בבעלותי, לרבות זכות חוזית או אחרת לבעלות, או ברשותי דירה או חלק
              בדירה ב-10 שנים האחרונות, כולל דירה בדמי מפתח.{" "}
            </li>
            <li>
              הנני מצהיר/ה בזה, שכל הפרטים שמסרתי ואמסור הקשורים להליך קבלת
              הדירה בדיור הציבורי ולאחר מכן, לרבות לצורך קביעת גובה שכר הדירה
              ולשימוש הנאות בדירה בהתאם לכללי המשרד הם אמת.
            </li>
            <li>
              {" "}
              ידוע לי כי אם הצהרתי זו אינה אמת אאבד את זכאותי לדיור ציבורי.{" "}
            </li>
            <li>
              {" "}
              הנני מתיר\ה למשרד הבינוי והשיכון או מי שהוסמך על ידו לבקש, לקבל,
              להשיג או לבדוק נתונים הקשורים להצהרותיי במסגרת זו במאגרי מידע,
              לרבות במאגרי המידע של : רשות המיסים, מרשם אוכלוסין, ביטוח לאומי,
              ביקורת גבולות, רשות בתי הסוהר, בחקירות או בכל דרך שהיא.{" "}
            </li>
            <li>
              {" "}
              ידוע לי כי עלי להודיע על כל שינוי שיחול בפרטים שמסרתי הקשורים
              בזכאותי לדיור ציבורי.{" "}
            </li>
          </ol>
        </Grid>
        <FormSignature />
      </Grid>
    </page>
  );
}
