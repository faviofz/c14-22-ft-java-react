import { useState } from 'react';
import { serviceUploadImage } from '@/services';

export function useUploadImage() {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImage = ({ target }) => {
    const file = target.files[0];
    console.log(file);
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'game_store');

    setLoading(true);

    serviceUploadImage(data)
      .then(response => {
        setImage(response.secure_url);
      })
      .catch(e => {
        setError('Error cargando la imagem');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const resetImage = () => {
    setImage('');
  };

  return { handleImage, image, loading, error, resetImage };
}
