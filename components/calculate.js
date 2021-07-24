const perhitunganPerempuan = (tinggi) =>
  tinggi - 100 - (tinggi - 100) * (15 / 100);
const perhitunganPria = (tinggi) => tinggi - 100 - (tinggi - 100) * (10 / 100);

const checkGender = (gender, tinggi) => {
  if (gender === 'perempuan') {
    return perhitunganPerempuan(tinggi);
  }
  return perhitunganPria(tinggi);
};

export default checkGender;
