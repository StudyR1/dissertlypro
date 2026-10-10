import { useEffect } from "react";

const ExternalRedirect = ({ to }: { to: string }) => {
  useEffect(() => {
    if (typeof window !== "undefined" && navigator.userAgent !== "ReactSnap") {
      window.location.replace(to);
    }
  }, [to]);
  return (
    <div className="container py-24 text-center font-sans text-muted-foreground">
      Redirecting to our secure order page… <a className="text-copper underline" href={to}>Continue</a>
    </div>
  );
};

export default ExternalRedirect;
