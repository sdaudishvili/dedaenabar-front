import clsx from 'clsx';
import PropTypes from 'prop-types';
import { PictureIcon } from '@/components/Vectors/PictureIcon';
import { SVG } from '../SVG';
import { FileArrowIcon } from '../Vectors/FileArrowIcon';
import { FileArrowIconMobile } from '../Vectors/FileArrowIconMobile';

const ImageUploader = React.forwardRef(({ className, onChange }, ref) => {
  const [value, setValue] = React.useState('');

  const inputRef = React.useRef(null);

  const changeHandler = (e) => {
    const [file] = e.target.files;
    if (file) {
      setValue(file.name);
      onChange(file);
    }
  };

  React.useImperativeHandle(ref, () => ({
    clearValue() {
      setValue('');
      inputRef.current.value = '';
    }
  }));

  return (
    <label htmlFor="button-file" className={clsx(className, 'relative w-full cursor-pointer group')}>
      <input id="button-file" type="file" onChange={changeHandler} className="hidden" ref={inputRef} />
      <div className="md:flex justify-between items-center relative">
        <div className="font-ranua-md flex-1">
          <p>Upload Your Profile Picture Here</p>
          <p className="font-neue-lt tracking-wide italic mt-0-6 md:text-1-6 text-1-2 w-80-percent">
            Profile picture with no good Face visibility will not be considered
          </p>
        </div>
        <div className="md:h-8-5 md:w-8-5 h-5-5 w-5-5 md:mt-0 mt-2-5 flex items-center justify-center border rounded-full group-hover:bg-purple duration-150 text-dark">
          <SVG src={PictureIcon} className="md:w-3-0 w-1-8" style={{ fill: 'none' }} withoutStrokes />
        </div>
        <div className="absolute top-[-1rem] left-40-percent md:block hidden">
          <SVG src={FileArrowIcon} className="w-[17vw]" />
        </div>
        <div className="absolute top-2-0 right-0 md:hidden">
          <SVG src={FileArrowIconMobile} className="w-20-0" />
        </div>
      </div>
      <p className="max-w-full break absolute right-0 md:left-[auto] left-7-0 md:bottom-[-4rem] bottom-2-0">{value}</p>
    </label>
  );
});

ImageUploader.displayName = 'ImageUploader';

ImageUploader.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func
};

ImageUploader.defaultProps = {
  className: '',
  onChange: () => {}
};

export default ImageUploader;
