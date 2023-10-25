import PropType from 'prop-types';

export const AccordionItem = ({title, description}) => (
  <div className='collapse collapse-arrow bg-base-200 min-w-[26rem] max-w-[45rem]  w-full focus-within:bg-primary focus-within:text-secondary'>
    <input type='radio' name='my-accordion-2' checked='checked' />
    <div className='text-xl font-medium collapse-title'>
      {title}
    </div>
    <div className='collapse-content'>
      <p>{description}</p>
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
