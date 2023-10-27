/**
 * BenefitsContentBlock component for rendering a block of benefits content.
 *
 * @param {BenefitsContentBlockProps} props - The component's props.
 * @param {string} props.title - The title of the content block.
 * @param {string} props.text - The text content of the block.
 * @returns {React.ReactElement} The rendered benefits content block component.
 */

interface BenefitsContentBlockProps {
  title: string;
  text: string;
}

export const BenefitsContentBlock: React.FC<BenefitsContentBlockProps> = ({
  title,
  text,
}): React.ReactElement => {
  return (
    <div className="basis-1/3 z-10 min-h-[200px]">
      <div className="p-6 flex flex-col gap-2 bg-[rgba(255,255,254,0.4)] rounded-3xl min-h-full backdrop-blur-sm">
        <h3 className="text-wave text-[32px]">{title}</h3>
        <p className="text-[20px] text-[rgba(255,255,255,0.6)]">{text}</p>
      </div>
    </div>
  );
};
