export const locale = {
  months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_December'.split('_'),
  monthsShort: 'jan_feb_mär_apr_mai_jun_jul_aug_sep_okt_nov_dez'.split('_'),
  monthsParseExact: true,
  weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
  weekdaysShort: 'Son._Mon._Din._Mit._Don._Frw._Sam.'.split('_'),
  weekdaysMin: 'SO_MO_DI_MI_DO_FR_SA'.split('_'),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  calendar: {
    sameDay: '[Aujourd’hui à] LT',
    nextDay: '[Demain à] LT',
    nextWeek: 'dddd [à] LT',
    lastDay: '[Hier à] LT',
    lastWeek: 'dddd [dernier à] LT',
    sameElse: 'L'
  },
  relativeTime: {
    future: 'dans %s',
    past: 'il y a %s',
    s: 'quelques secondes',
    m: 'une minute',
    mm: '%d minutes',
    h: 'une heure',
    hh: '%d heures',
    d: 'un jour',
    dd: '%d jours',
    M: 'un mois',
    MM: '%d mois',
    y: 'un an',
    yy: '%d ans'
  },
  dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
  ordinal: function (number: number) {
    return number + (number === 1 ? 'er' : 'e');
  },
  meridiemParse: /PD|MD/,
  isPM: function (input: string) {
    return input.charAt(0) === 'M';
  },
  meridiem: function (hours: number) {
    return hours < 12 ? 'PD' : 'MD';
  },
  week: {
    dow: 1,
    doy: 4
  }
}