function scripts() {
  // вставляем стили для скрытия блоков
  $("body *:first").before(
    "<style>" +
      ".propaganda, .sber-countdown, .psb-tax-teaser, .daily-promo-unit, .daily-promo-unit-label { display: none !important; }" +
      "</style>",
  );
}
