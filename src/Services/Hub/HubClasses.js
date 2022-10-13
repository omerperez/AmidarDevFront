class formsStatus {
  constructor({
    bm_isBikurKashish_hub,
    bm_isGarBegapo_hub,
    bm_isTama38_hub,
    bm_isTazhirDayar_js,
    bm_select_cheder_bitachon_hub,
    bm_select_choze_status_hub,
  }) {
    this.isElderlyVisit = getFormStatus(
      bm_isBikurKashish_hub,
      "isBikurKashish"
    );
    this.isLiveAlone = getFormStatus(bm_isGarBegapo_hub, "isGarBegapo");

    this.isBuilding38 = getFormStatus(bm_isTama38_hub, "isTama38");
    this.isTenantAffidavitA = getFormStatus(bm_isTazhirDayar_js, "resultA");
    this.isTenantAffidavitB = getFormStatus(bm_isTazhirDayar_js, "resultB");
    this.isSecurityRoom = bm_select_cheder_bitachon_hub.result.CHADAR_BITACHON;
    this.isContractStatus = getFormStatus(bm_select_choze_status_hub, "1");
  }
}

function getFormStatus(obj, resultName) {
  return obj.result[resultName] === "1";
}

export { formsStatus };
