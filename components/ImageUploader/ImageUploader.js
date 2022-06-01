import clsx from 'clsx';
import PropTypes from 'prop-types';
import { PictureIcon } from '@/components/Vectors/PictureIcon';
import { SVG } from '../SVG';

function ImageUploader({ className, onChange }) {
  const [value, setValue] = React.useState('');

  const changeHandler = (e) => {
    const file = e.target.files[0];
    setValue(file.name);
    onChange(file);
  };
  return (
    <label htmlFor="button-file" className={clsx(className, 'relative w-full cursor-pointer group')}>
      <input id="button-file" type="file" onChange={changeHandler} className="hidden" />
      <div className="md:flex justify-between items-center">
        <div className="font-ranua-md">
          <p>Upload Your Profile Picture Here</p>
          <p className="font-neue-lt tracking-wide italic mt-0-6 md:text-1-6 text-1-2">
            Profile picture with no good Face visibility will not be considered
          </p>
        </div>
        <div className="md:h-8-5 md:w-8-5 h-5-5 w-5-5 md:mt-0 mt-2-5 flex items-center justify-center border rounded-full group-hover:bg-purple duration-150 text-dark">
          <SVG src={PictureIcon} className="md:w-3-0 w-1-8" style={{ fill: 'none' }} withoutStrokes />
        </div>
      </div>
      <p className="max-w-full break absolute right-0 md:left-[auto] left-7-0 md:bottom-[-4rem] bottom-2-0">{value}</p>
    </label>
  );
}

ImageUploader.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func
};

ImageUploader.defaultProps = {
  className: '',
  onChange: () => {}
};

export default ImageUploader;
