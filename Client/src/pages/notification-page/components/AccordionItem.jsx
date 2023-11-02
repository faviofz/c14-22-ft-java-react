import PropType from 'prop-types';
import { Link } from 'react-router-dom';

export const AccordionItem = ({title, description}) => (
  <div className='collapse collapse-arrow bg-base-200 min-w-[26rem] max-w-[45rem]  w-full focus-within:bg-primary focus-within:text-white [&>div>a]:focus-within:text-white'>
    <input type='radio' name='my-accordion-2'  />
    <div className='text-xl font-medium collapse-title'>
      {title}
    </div>
    <div className='flex justify-between px-8 collapse-content'>
      <p>{description}</p>
      <Link to={"/product/addProducts"}>Agregar Productos</Link> 
    </div>
   
  </div>
);

AccordionItem.propType = {
    title: PropType.string,
    description: PropType.string,
}

AccordionItem.defaultProps = {
    title: "Click to open this one and close others",
    description: 'hello',
}
