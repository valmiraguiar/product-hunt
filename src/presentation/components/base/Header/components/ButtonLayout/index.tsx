import { IButtonLayoutProps } from './types';

const ButtonLayout: React.FC<IButtonLayoutProps> = ({
  handleSubscribe,
  handleSignIn,
}) => {
  return (
    <div className="flex gap-4">
      <button
        type="button"
        className="w-[106px] h-[36px] bg-[#FEF6F1] rounded-[4px] text-[#e12e0d] font-light hover:text-[#E00F37]"
        onClick={handleSubscribe}
      >
        Subscribe
      </button>

      <button
        type="button"
        className="w-[81px] h-[36px] bg-[#FF6154] rounded-[4px] text-white font-light"
        onClick={handleSignIn}
      >
        Sign in
      </button>
    </div>
  );
};

export default ButtonLayout;
