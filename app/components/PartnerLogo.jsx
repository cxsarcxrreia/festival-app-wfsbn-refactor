// src/components/PartnerLogo.jsx
export default function PartnerLogo({ src, alt, size = 72 }) {
  return (
    <div
      className="rounded-full overflow-hidden bg-white ring-1 ring-black/10 shadow-sm shrink-0 p-2"
      style={{ width: size, height: size }}
      aria-label={alt}
    >
      {/* object-contain keeps full logo visible; switch to object-cover if you prefer crop */}
      <img src={src} alt={alt} className="w-full h-full object-contain" loading="lazy" />
    </div>
  );
}
