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

export { getDialogPaperStyle };
