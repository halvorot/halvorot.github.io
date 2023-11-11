import { createSignal, createEffect, Show } from "solid-js";
import type { Component } from "solid-js";

// tell typescript that this function is defined in the global scope
declare function consentGranted(): void;
declare function getCookieConsent(): string;

const CookieConsent: Component = () => {
  const [cookies, setCookies] = createSignal("unk");
  const [isMounted, setIsMounted] = createSignal(false);

  // get dates for cookie expiration
  let d = new Date();
  let oneYear = new Date(d.getFullYear() + 1, d.getMonth(), d.getDate());

  const handleAccept = () => {
    setCookies("granted");
    // accepted cookie lasts for a year
    document.cookie = "cookie-consent=granted; expires=" + oneYear + "; path=/";
    // call global function (head defined) to update GA4
    consentGranted();
  };

  const handleDecline = () => {
    setCookies("denied");
    // declined cookie only lasts for the session
    // if you don't want to be evil you can set it to a year
    document.cookie = "cookie-consent=denied; path=/";
  };

  // this waits to load the cookie banner until the component is mounted
  // so that there is not a component flash
  createEffect(() => {
    setIsMounted(true);
    // get cookie approval after component is mounted
    setCookies(getCookieConsent());
  });

  // if there is no cookie for "cookie-consent", display the banner
  return (
    <Show when={isMounted()} fallback={null}>
      <div
        id="cookie-banner"
        class={`${
          cookies() === "granted" || cookies() === "denied" ? "hidden" : ""
        } fixed bottom-0 right-0 z-50 m-2 max-w-md rounded-lg border-2 border-neutral-900 bg-neutral-950 text-slate-200 shadow-xl`}
      >
        <div class="p-4 text-center">
          <p class="mb-4 text-sm sm:text-base">
            We use cookies to analyze our website and make your experience even
            better. To learn more, see our{" "}
            <a
              class="text-orange-300 underline hover:text-orange-400"
              href="/privacy-policy"
            >
              Privacy Policy.
            </a>
          </p>

          <div class="mx-auto">
            <button
              class="text-sm mr-2 rounded-md bg-transparent px-4 py-2 text-slate-200 transition hover:bg-neutral-900"
              onClick={handleDecline}
            >
              Decline
            </button>
            <button
              class="font-medium rounded-lg px-4 py-2 text-center mr-3 text-slate-200 transition bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-800"
              onClick={handleAccept}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </Show>
  );
};

export default CookieConsent;
