import { SVG } from '@/components/Common/SVG';
import { LogoIcon } from '@/components/Vectors/Logo';
import { RouterLink } from '../RouterLink';

function Logo({ ...rest }) {
  return (
    <h1 {...rest} title="Dedaena Bar">
      <RouterLink href="/" className="flex flex-col items-center logo">
        <SVG src={LogoIcon} className="w-full" />
      </RouterLink>
    </h1>
  );
}

export default Logo;
