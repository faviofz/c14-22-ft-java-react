import { useAuth, useModal, useUploadImage } from '@/hooks';
import { Avatar } from './Avatar';
import { useFormik } from 'formik';
import { Input, Preload } from '@/components';
import * as Yup from 'yup';

export function ConfigUser() {
  const { authState, updateUser } = useAuth();
  const { closeModal } = useModal();
  const { handleImage, image, loading } = useUploadImage();

  const {
    handleSubmit,
    handleChange,
    getFieldProps,
    handleBlur,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      name: authState?.user?.name,
      surname: authState?.user?.surname,
      password: '',
      confirmPassword: '',
      url: authState?.user?.url,
    },
    onSubmit: values => {
      updateUser(values);
      closeModal();
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Debe tener más de 3 caracteres'),
      surname: Yup.string().min(3, 'Debe tener más de 3 caracteres'),
      password: Yup.string().min(6, 'debe tener al menos 6 caracteres'),
      confirmPassword: Yup.string()
        .min(6, 'debe tener al menos 6 caracteres')
        .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden'),
    }),
  });

  return (
    <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
      <div className='flex flex-col justify-between gap-5 lg:justify-around lg:flex-row-reverse'>
        <label
          htmlFor='input-file'
          className='flex flex-col items-center justify-center gap-5 cursor-pointer lg:bg-base-200 lg:rounded-3xl lg:px-8 lg:border lg:border-primary lg:shadow'
        >
          <div className='w-40 h-40 transition-all duration-300 ease-out lg:w-52 lg:h-52 '>
            {loading ? (
              <Preload />
            ) : (
              <>
                {image ? (
                  <img
                    src={image}
                    className='min-w-full min-h-full rounded-full shadow-lg'
                  />
                ) : (
                  <Avatar />
                )}
              </>
            )}
            <Input
              id='input-file'
              type='file'
              name='image'
              onChange={handleImage}
              className='hidden w-full file-input file-input-bordered file-input-primary '
            />
            <Input
              type='text'
              className='hidden'
              {...getFieldProps('url')}
              value={(values.url = image)}
            />
          </div>
          <h3 className='text-lg text-secondary'>
            {authState.loading
              ? '...'
              : `${authState?.user?.name} ${authState?.user?.surname}`}
          </h3>
        </label>
        {/* FORM */}
        <section className='flex flex-col flex-wrap w-full gap-5'>
          <Input
            label='Nombres'
            placeholder={authState?.user?.name}
            name='name'
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            errorMessage={touched.name && errors.name}
          />

          <Input
            label='Apellidos'
            placeholder={authState?.user?.surname}
            name='surname'
            value={values.surname}
            onBlur={handleBlur}
            onChange={handleChange}
            errorMessage={touched.surname && errors.surname}
          />

          <Input
            label='Contraseña'
            placeholder='Ingresar nueva contraseña'
            name='password'
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            errorMessage={touched.password && errors.password}
            type='password'
          />
          <Input
            label='Confirmar Contraseña'
            placeholder='Repite la contraseña'
            name='confirmPassword'
            value={values.confirmPassword}
            onBlur={handleBlur}
            onChange={handleChange}
            errorMessage={touched.confirmPassword && errors.confirmPassword}
            type='password'
          />
        </section>
      </div>

      {/* BUTTOMS */}
      <div className='w-full'>
        <button
          type='submit'
          className='w-full mb-5 lg:mb-0 btn btn-primary'
          disabled={loading}
        >
          {loading ? '...' : 'Guardar'}
        </button>
      </div>
    </form>
  );
}
