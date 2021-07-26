const buildContainer = () => {
  const container = document.createElement('div');
  container.className = 'hasil';
  return container;
};

const buildResult = (checked) => {
  const hasil = document.createElement('p');
  hasil.textContent = checked;
  return hasil;
};

const mixed = (hasil, container) => {
  container.appendChild(hasil);
  return container;
};

const eventListen = (checked) => {
  return mixed(buildResult(checked), buildContainer());
};

export default eventListen;
