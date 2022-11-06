function getDialogPaperStyle(width, height, dialogStyle) {
  return {
    "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
      maxWidth: width ?? "100%",
      minWidth: width ?? "60%",
      maxHeight: height ?? "100%",
      minHeight: height ?? "80%",
      direction: "rtl",
      ...dialogStyle,
    },
  };
}

const qualityRatingOptions = [
  {
    label: "לא ראוי למגורים",
    value: 1,
    textActive: "text-label-white",
  },
  {
    label: "נדרש תיקון מקיף",
    value: 2,
    textActive: "text-label-white",
  },
  {
    label: "דרוש טיפול נקודתי",
    value: 3,
    textActive: "text-label-black",
  },
  {
    label: "תקין, אך ישן",
    value: 4,
    textActive: "text-label-black",
  },
  {
    label: "תקין",
    value: 5,
    textActive: "text-label-white",
  },
];

export { getDialogPaperStyle, qualityRatingOptions };
