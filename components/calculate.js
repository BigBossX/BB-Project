const perhitunganPerempuan = (tinggi) =>
  tinggi - 100 - (tinggi - 100) * (15 / 100);
const perhitunganPria = (tinggi) => tinggi - 100 - (tinggi - 100) * (10 / 100);

const minimal = 'Masukkan angka yang valid.';

const checkGender = (gender, tinggi) => {
  if (tinggi < 100) return minimal;
  if (gender === 'perempuan') {
    return `${perhitunganPerempuan(tinggi)} Kg`;
  }
  return `${perhitunganPria(tinggi)} Kg`;
};

export default checkGender;
