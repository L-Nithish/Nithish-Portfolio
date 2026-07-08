import { Navigation } from "@/components/ui/navigation";
import { PrologueScene } from "@/components/scenes/v2-scene-0-prologue";
import { IdentityScene } from "@/components/scenes/v2-scene-1-identity";
import { ManifestoScene } from "@/components/scenes/v2-scene-2-manifesto";
import { CapabilitiesScene } from "@/components/scenes/v2-scene-3-capabilities";
import { CaseStudiesScene } from "@/components/scenes/v2-scene-4-case-studies";
import { SignatureScene } from "@/components/scenes/v2-scene-signature";
import { JourneyScene } from "@/components/scenes/v2-scene-5-journey";
import { EpilogueScene } from "@/components/scenes/v2-scene-7-epilogue";
import { ContactScene } from "@/components/scenes/v2-scene-8-contact";

export default function Home() {
  return (
    <main className="w-full relative bg-black text-neutral-200 selection:bg-white selection:text-black">
      <Navigation />
      
      <div id="prologue">
        <PrologueScene />
      </div>

      <div id="identity">
        <IdentityScene />
      </div>

      <div id="manifesto">
        <ManifestoScene />
      </div>

      <div id="capabilities">
        <CapabilitiesScene />
      </div>

      <div id="case-studies">
        <CaseStudiesScene />
      </div>

      <SignatureScene />

      <div id="journey">
        <JourneyScene />
      </div>

      <EpilogueScene />

      <div id="contact">
        <ContactScene />
      </div>
    </main>
  );
}
