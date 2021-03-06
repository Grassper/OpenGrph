import { defaultFill, defaultOpacity } from './_defaults';
import { unhex } from './_utils';

export const temple = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22152%22%20height%3D%22152%22%20viewBox%3D%220%200%20152%20152%22%3E%3Cpath%20d%3D%22M152%20150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2%200v-28h-8v20h-20v8h28zM82%2030v18h18V30H82zm20%2018h20v20h18V30h-20V10H82v18h20v20zm0%202v18h18V50h-18zm20-22h18V10h-18v18zm-54%2092v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20%2022H10v18h18v-18zm54%200v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20%2040v-18h18v18h-18zM30%200h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20%2048h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30%2050h18v18H30V50zm-2-40H10v18h18V10z%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`;
