import Image from "next/image";
import Link from "next/link";
import React from "react";
import TextMaskAnimation from "./TextMaskAnimation";
import TextAnimation from "./TextAnimation";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="px-10 pt-20 rounded-ss-[4rem] rounded-se-[4rem] bg-zinc-100">
      <div className="flex justify-between items-center">
        <h2 className="text-desc font-bold text-zinc-900">
          <TextAnimation text="Let's Connect" once={true} delayIndex={8} />
        </h2>
        <Button isButton>
          <Link href="/contact" className="rounded-full px-3 flex items-center">
            Work with us{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none">
                <path
                  d="M12.25 29.75L29.75 12.25"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.25 12.25H29.75V29.75"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 py-16 mt-16 border-y border-zinc-900">
        <div>
          <Image
            src="/graphly.webp"
            width={220}
            height={220}
            alt="Company Logo"
          />
          <div className="text-zinc-900 mt-5">
            <TextMaskAnimation
              phrases={[
                "Graphly is your partner in creating eye-catching and practical designs. We focus on",
                "branding, digital solutions, and commercial production, helping startups, small",
                "businesses, and large companies succeed in today’s digital world.",
              ]}
            />
          </div>
          <div className="flex items-center gap-3 mt-5">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none">
                <path
                  d="M22 16.69C22 20.33 19.83 22.5 16.19 22.5H15C14.45 22.5 14 22.05 14 21.5V15.73C14 15.46 14.22 15.23 14.49 15.23L16.25 15.2C16.39 15.19 16.51 15.09 16.54 14.95L16.89 13.04C16.92 12.86 16.78 12.69 16.59 12.69L14.46 12.72C14.18 12.72 13.96 12.5 13.95 12.23L13.91 9.78C13.91 9.62 14.04 9.48001 14.21 9.48001L16.61 9.44C16.78 9.44 16.91 9.31001 16.91 9.14001L16.87 6.73999C16.87 6.56999 16.74 6.44 16.57 6.44L13.87 6.48001C12.21 6.51001 10.89 7.87 10.92 9.53L10.97 12.28C10.98 12.56 10.76 12.78 10.48 12.79L9.28 12.81C9.11 12.81 8.98001 12.94 8.98001 13.11L9.01001 15.01C9.01001 15.18 9.14 15.31 9.31 15.31L10.51 15.29C10.79 15.29 11.01 15.51 11.02 15.78L11.11 21.48C11.12 22.04 10.67 22.5 10.11 22.5H7.81C4.17 22.5 2 20.33 2 16.68V8.31C2 4.67 4.17 2.5 7.81 2.5H16.19C19.83 2.5 22 4.67 22 8.31V16.69Z"
                  fill="black"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none">
                <path
                  d="M16.19 2.5H7.81C4.17 2.5 2 4.67 2 8.31V16.68C2 20.33 4.17 22.5 7.81 22.5H16.18C19.82 22.5 21.99 20.33 21.99 16.69V8.31C22 4.67 19.83 2.5 16.19 2.5ZM12 16.38C9.86 16.38 8.12 14.64 8.12 12.5C8.12 10.36 9.86 8.62 12 8.62C14.14 8.62 15.88 10.36 15.88 12.5C15.88 14.64 14.14 16.38 12 16.38ZM17.92 7.38C17.87 7.5 17.8 7.61 17.71 7.71C17.61 7.8 17.5 7.87 17.38 7.92C17.26 7.97 17.13 8 17 8C16.73 8 16.48 7.9 16.29 7.71C16.2 7.61 16.13 7.5 16.08 7.38C16.03 7.26 16 7.13 16 7C16 6.87 16.03 6.74 16.08 6.62C16.13 6.49 16.2 6.39 16.29 6.29C16.52 6.06 16.87 5.95 17.19 6.02C17.26 6.03 17.32 6.05 17.38 6.08C17.44 6.1 17.5 6.13 17.56 6.17C17.61 6.2 17.66 6.25 17.71 6.29C17.8 6.39 17.87 6.49 17.92 6.62C17.97 6.74 18 6.87 18 7C18 7.13 17.97 7.26 17.92 7.38Z"
                  fill="black"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none">
                <path
                  d="M21.98 11.91C21.64 6.10995 16.37 1.63996 10.3 2.63996C6.11998 3.32996 2.76999 6.71994 2.11999 10.8999C1.73999 13.3199 2.24001 15.6099 3.33001 17.4999L2.43999 20.8099C2.23999 21.5599 2.92998 22.2399 3.66998 22.0299L6.92999 21.13C8.40999 22 10.14 22.4999 11.99 22.4999C17.63 22.4999 22.31 17.53 21.98 11.91ZM16.88 16.2199C16.79 16.3999 16.68 16.57 16.54 16.73C16.29 17 16.02 17.2 15.72 17.32C15.42 17.45 15.09 17.51 14.74 17.51C14.23 17.51 13.68 17.39 13.11 17.14C12.53 16.89 11.96 16.5599 11.39 16.1499C10.81 15.7299 10.27 15.2599 9.74999 14.7499C9.22999 14.2299 8.76997 13.6799 8.34997 13.1099C7.93997 12.5399 7.60999 11.9699 7.36999 11.3999C7.12999 10.8299 7.01 10.28 7.01 9.75996C7.01 9.41996 7.06999 9.08996 7.18999 8.78996C7.30999 8.47996 7.50001 8.19996 7.77001 7.94996C8.09001 7.62996 8.43999 7.47996 8.80999 7.47996C8.94999 7.47996 9.08996 7.50995 9.21996 7.56995C9.34996 7.62995 9.46999 7.71995 9.55999 7.84995L10.72 9.48994C10.81 9.61994 10.88 9.72994 10.92 9.83994C10.97 9.94994 10.99 10.0499 10.99 10.1499C10.99 10.2699 10.95 10.39 10.88 10.51C10.81 10.63 10.72 10.7499 10.6 10.8699L10.22 11.2699C10.16 11.3299 10.14 11.3899 10.14 11.4699C10.14 11.5099 10.15 11.5499 10.16 11.5899C10.18 11.6299 10.19 11.66 10.2 11.6899C10.29 11.86 10.45 12.0699 10.67 12.3299C10.9 12.5899 11.14 12.8599 11.4 13.1199C11.67 13.3899 11.93 13.6299 12.2 13.8599C12.46 14.0799 12.68 14.23 12.85 14.32C12.88 14.33 12.91 14.3499 12.94 14.3599C12.98 14.3799 13.02 14.38 13.07 14.38C13.16 14.38 13.22 14.35 13.28 14.29L13.66 13.91C13.79 13.78 13.91 13.69 14.02 13.63C14.14 13.56 14.25 13.5199 14.38 13.5199C14.48 13.5199 14.58 13.5399 14.69 13.5899C14.8 13.6399 14.92 13.7 15.04 13.79L16.7 14.9699C16.83 15.0599 16.92 15.17 16.98 15.29C17.03 15.42 17.06 15.5399 17.06 15.6799C17 15.8499 16.96 16.0399 16.88 16.2199Z"
                  fill="black"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none">
                <path
                  d="M17 4.5H7C4 4.5 2 6.5 2 9.5V15.5C2 18.5 4 20.5 7 20.5H17C20 20.5 22 18.5 22 15.5V9.5C22 6.5 20 4.5 17 4.5ZM13.89 13.53L11.42 15.01C10.42 15.61 9.59998 15.15 9.59998 13.98V11.01C9.59998 9.84001 10.42 9.38001 11.42 9.98001L13.89 11.46C14.84 12.04 14.84 12.96 13.89 13.53Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="text-zinc-900 grid grid-cols-3">
          <div className="col-start-2">
            <h5 className="font-semibold text-orange-600">Navigation</h5>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <Link
                  href="/"
                  className="relative inline-flex after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-zinc-900 after:max-w-0 hover:after:max-w-full after:transition-all after:duration-500 after:ease-[cubic-bezier(0.83,0,0.17,1)]">
                  <TextMaskAnimation phrases={["Home"]} />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="relative inline-flex after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-zinc-900 after:max-w-0 hover:after:max-w-full after:transition-all after:duration-500 after:ease-[cubic-bezier(0.83,0,0.17,1)]">
                  <TextMaskAnimation phrases={["About Us"]} />
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="relative inline-flex after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-zinc-900 after:max-w-0 hover:after:max-w-full after:transition-all after:duration-500 after:ease-[cubic-bezier(0.83,0,0.17,1)]">
                  <TextMaskAnimation phrases={["Services"]} />
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="relative inline-flex after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-zinc-900 after:max-w-0 hover:after:max-w-full after:transition-all after:duration-500 after:ease-[cubic-bezier(0.83,0,0.17,1)]">
                  <TextMaskAnimation phrases={["Works"]} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-start-4">
            <h5 className="font-semibold text-orange-600">Contact</h5>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <Link
                  href="tel:+97145547461"
                  className="relative inline-flex after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-zinc-900 after:max-w-0 hover:after:max-w-full after:transition-all after:duration-500 after:ease-[cubic-bezier(0.83,0,0.17,1)]">
                  <TextMaskAnimation phrases={["+971 4 554 7461"]} />
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+971588175064"
                  className="relative inline-flex after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-zinc-900 after:max-w-0 hover:after:max-w-full after:transition-all after:duration-500 after:ease-[cubic-bezier(0.83,0,0.17,1)]">
                  <TextMaskAnimation phrases={["+971 58 817 5064"]} />
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@graphilyco.com"
                  className="relative inline-flex after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-zinc-900 after:max-w-0 hover:after:max-w-full after:transition-all after:duration-500 after:ease-[cubic-bezier(0.83,0,0.17,1)]">
                  <TextMaskAnimation phrases={["info@graphilyco.com"]} />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="relative inline-flex after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-zinc-900 after:max-w-0 hover:after:max-w-full after:transition-all after:duration-500 after:ease-[cubic-bezier(0.83,0,0.17,1)]">
                  <TextMaskAnimation
                    phrases={[
                      "Office 702, Oxford Tower,",
                      "Business Bay, Dubai UAE",
                      "",
                    ]}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-zinc-900 flex justify-between items-center py-10">
        <p>Copyright© 2024 Graphlyco. All Rights Reserved.</p>
        <Link
          href="#"
          onClick={(e) => handleNavigation(e, "/works")}
          className="relative inline-flex after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-zinc-900 after:max-w-0 hover:after:max-w-full after:transition-all after:duration-500 after:ease-[cubic-bezier(0.83,0,0.17,1)]">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
