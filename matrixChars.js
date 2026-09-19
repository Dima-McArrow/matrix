const numbers = "1234567890";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const cyrillicUpperCase = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
const hebrew = "אבגדהוזחטיכלמנסעפצקרשת";
const hakagana =
  "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほま";
const katakana =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマ";
const mandarin = "你好吗我很好谢谢";

const matrixChars = "".concat(
  numbers,
  upperCase,
  cyrillicUpperCase,
  hebrew,
  hakagana,
  katakana,
  mandarin
);

export default matrixChars;
