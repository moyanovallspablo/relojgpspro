import ImageReveal from "@/components/motion/ImageReveal";
import Parallax from "@/components/motion/Parallax";

export default function EditorialImage({
  illustration,
  caption,
  aspect = "aspect-[16/9]",
  parallax = false,
  className = "",
}: {
  illustration: React.ReactNode;
  caption?: string;
  aspect?: string;
  parallax?: boolean;
  className?: string;
}) {
  // "relative": las ilustraciones con next/image usan `fill`, que se
  // posiciona respecto a este marco.
  const frameClasses = `relative ${aspect} w-full overflow-hidden rounded-card border border-line`;

  return (
    <figure className={className}>
      <ImageReveal className={parallax ? undefined : frameClasses}>
        {parallax ? (
          <Parallax wrapperClassName={frameClasses} amount={6}>
            {illustration}
          </Parallax>
        ) : (
          illustration
        )}
      </ImageReveal>
      {caption && (
        <figcaption className="mt-3 text-xs text-ink-500">{caption}</figcaption>
      )}
    </figure>
  );
}
