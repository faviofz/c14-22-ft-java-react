import axios from 'axios';

export function serviceUploadImage(data) {
  const path = 'https://api.cloudinary.com/v1_1/dwfhsitwe/image/upload';
  return new Promise((resolve, reject) => {
    axios
      .post(path, data)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}
