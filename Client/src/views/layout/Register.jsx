export const Register = () => {
  return (
    <>
      <div className='grid w-full grid-cols-2 bg-base-100'>
        <div className='border'></div>
        <div className='p-5 border'>
          <h1>Cree su cuenta</h1>
          <div>
            <div className='w-full max-w-xs form-control'>
              <label className='label'>
                <span className='label-text'>What is your name?</span>
              </label>
              <input
                type='text'
                placeholder='Type here'
                className='w-full max-w-xs input input-bordered'
              />
            </div>
          </div>

          <div>
            <div className='w-full max-w-xs form-control'>
              <label className='label'>
                <span className='label-text'>What is your name?</span>
              </label>
              <input
                type='text'
                placeholder='Type here'
                className='w-full max-w-xs input input-bordered'
              />
            </div>
          </div>

          <div>
            <div className='w-full max-w-xs form-control'>
              <label className='label'>
                <span className='label-text'>What is your name?</span>
              </label>
              <input
                type='text'
                placeholder='Type here'
                className='w-full max-w-xs input input-bordered'
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input type='checkbox' className='toggle toggle-sm toggle-primary'  />
            <h1>He leido y acepta terminos y condiciones </h1>
          </div>

          <button className="btn btn-primary btn-wide">Registrarme</button>
        </div>
      </div>
    </>
  );
};
