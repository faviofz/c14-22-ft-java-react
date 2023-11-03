import PropType from 'prop-types';
import { Link } from 'react-router-dom';

export const AccordionItem = ({title, description1, description2}) => (
  <div className='collapse collapse-arrow bg-base-200 min-w-[26rem] max-w-[45rem]  w-full focus-within:bg-primary focus-within:text-white [&>div>a]:focus-within:text-white'>
    <input type='radio' name='my-accordion-2'  />
    <div className='text-xl font-medium collapse-title'>
      {title}
    </div>
    <div className='flex items-center justify-between px-8 collapse-content'>
      <div className='flex flex-col'>
      <p>{description1}</p>
      <p>{description2}</p>
      </div>
      <Link className='btn btn-primary btn-sm' to={"/product/addProducts"}>Agregar Productos</Link> 
    </div>
   
  </div>
);

AccordionItem.propType = {
    title: PropType.string,
    description1: PropType.string,
    description2: PropType.string,
}

AccordionItem.defaultProps = {
    title: "Click to open this one and close others",
    description: 'hello',
}
