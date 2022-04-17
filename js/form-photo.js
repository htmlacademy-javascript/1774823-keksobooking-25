const fileChooserAvatar = document.querySelector('.ad-form__field input');
const previewAvatar = document.querySelector('.ad-form-header__preview img');

const fileChoosePhoto = document.querySelector('.ad-form__upload input');
const previewPhoto = document.querySelector('.ad-form__photo');


const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

fileChooserAvatar.addEventListener('change', () => {
  const file = fileChooserAvatar.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewAvatar.src = URL.createObjectURL(file);
  }
});

fileChoosePhoto.addEventListener('change', () => {
  const file = fileChoosePhoto.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    const newPhoto = document.createElement('img');
    newPhoto.src = URL.createObjectURL(file);
    newPhoto.alt = 'Ваша фотография';
    newPhoto.width = 70;
    newPhoto.height = 70;
    previewPhoto.append(newPhoto);
  }
});

export {previewAvatar, previewPhoto};
