export const parseAwsIni = (ini: string) => {
  const lines = ini.split(/\r?\n/);
  let section: any;
  const out = Object.create(null);
  const re = /^\[([^\]]+)\]\s*$|^([a-z_]+)\s*=\s*(.+?)\s*$/;

  lines.forEach((line) => {
    const match = line.match(re);
    if (!match) return;
    if (match[1]) {
      section = match[1];
      if (out[section] == null) out[section] = Object.create(null);
    } else if (section) {
      out[section][match[2]] = match[3];
    }
  });

  return out;
};
