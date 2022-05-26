import MainAvatar from "../avatars/MainAvatar";
import EachTweet from "../tweets/EachTweet";

export default function MiddleSide() {
    return (
        <div className="border border-border-main">
            <div className="flex justify-between py-3 px-4 sticky">
                <h1 className="font-bold text-xl">Home</h1>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8946 9.35608L13 3.66642L15.1054 9.35608C15.1977 9.60559 15.3944 9.80231 15.6439 9.89464L21.3336 12L15.6439 14.1054C15.3944 14.1977 15.1977 14.3944 15.1054 14.6439L13 20.3336L10.8946 14.6439C10.8023 14.3944 10.6056 14.1977 10.3561 14.1054L4.66642 12L10.3561 9.89464C10.6056 9.80231 10.8023 9.60559 10.8946 9.35608Z" stroke="#0F1419" />
                    <path d="M5 3L5 7.99844" stroke="#0F1419" stroke-linecap="round" />
                    <line x1="7.5" y1="5.37581" x2="2.5" y2="5.37581" stroke="#0F1419" stroke-linecap="round" />
                    <path d="M7 18L7 21.2" stroke="#0F1419" stroke-linecap="round" />
                    <line x1="8.5" y1="19.7" x2="5.5" y2="19.7" stroke="#0F1419" stroke-linecap="round" />
                </svg>
            </div>
            <div className="flex mt-2 px-4 pb-4">
                <MainAvatar />
                <div className="w-full">
                    <div className="text-lg">
                        <textarea name="" className="w-full outline-0" placeholder="What's happening?"></textarea>
                    </div>
                    <div className="flex justify-between items-center mt-5">
                        <div className="flex space-x-2 items-center w-full">
                            <a href="" className="hover:bg-bg-main rounded-full block p-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.5" y="2.5" width="19" height="19" rx="1.5" stroke="#1D9BF0" />
                                    <path d="M17.5 21.5L9.56389 12.6302C9.25766 12.288 8.72677 12.2732 8.40201 12.598L2.5 18.5" stroke="#1D9BF0" />
                                    <path d="M21.5 15.5L16.5702 10.1221C16.2603 9.78401 15.7303 9.77511 15.4092 10.1026L11 14.6" stroke="#1D9BF0" />
                                    <circle cx="9" cy="8" r="1" fill="#1D9BF0" />
                                </svg>
                            </a>
                            <a href="" className="hover:bg-bg-main rounded-full block p-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.5" y="2.5" width="19" height="19" rx="1.5" stroke="#1D9BF0" />
                                    <path d="M9.56489 11.0824C9.38411 11.0824 9.2345 10.955 9.139 10.8015C9.13173 10.7898 9.12422 10.7783 9.11647 10.767C9.05397 10.6742 8.97727 10.5956 8.88636 10.5312C8.79545 10.4668 8.69129 10.4186 8.57386 10.3864C8.45644 10.3523 8.32765 10.3352 8.1875 10.3352C7.9053 10.3352 7.66098 10.4034 7.45454 10.5398C7.25 10.6761 7.09185 10.875 6.98011 11.1364C6.86837 11.3958 6.8125 11.7112 6.8125 12.0824C6.8125 12.4555 6.86647 12.7737 6.97443 13.0369C7.08238 13.3002 7.23863 13.5009 7.44318 13.6392C7.64772 13.7775 7.89583 13.8466 8.1875 13.8466C8.44507 13.8466 8.66288 13.8049 8.84091 13.7216C9.02083 13.6364 9.15719 13.5161 9.25 13.3608C9.302 13.2738 9.33944 13.1781 9.3623 13.0738C9.39229 12.9371 9.51153 12.8271 9.65057 12.8437H8.63579C8.41488 12.8437 8.23579 12.6647 8.23579 12.4437V12.2182C8.23579 11.9973 8.41488 11.8182 8.63579 11.8182H10.3443C10.5652 11.8182 10.7443 11.9973 10.7443 12.2182V12.5881C10.7443 13.1089 10.6335 13.5549 10.4119 13.9261C10.1922 14.2973 9.8892 14.5824 9.50284 14.7812C9.11837 14.9801 8.67613 15.0795 8.17613 15.0795C7.62121 15.0795 7.13352 14.9593 6.71307 14.7187C6.29261 14.4782 5.96496 14.1354 5.73011 13.6903C5.49526 13.2434 5.37784 12.7131 5.37784 12.0994C5.37784 11.6222 5.44886 11.1989 5.59091 10.8295C5.73295 10.4583 5.93087 10.1439 6.18466 9.88636C6.44034 9.62878 6.73579 9.4337 7.07102 9.30113C7.40814 9.16855 7.77083 9.10226 8.15909 9.10226C8.49621 9.10226 8.80966 9.15056 9.09943 9.24715C9.3911 9.34374 9.64867 9.48011 9.87216 9.65624C10.0975 9.83238 10.2803 10.0417 10.4205 10.2841C10.4868 10.3988 10.5412 10.5189 10.5838 10.6442C10.6608 10.8709 10.4714 11.0824 10.232 11.0824H9.56489Z" fill="#1D9BF0" />
                                    <path d="M12.5794 9.18181C12.8003 9.18181 12.9794 9.3609 12.9794 9.58181V14.6C12.9794 14.8209 12.8003 15 12.5794 15H11.9732C11.7522 15 11.5732 14.8209 11.5732 14.6V9.58181C11.5732 9.3609 11.7522 9.18181 11.9732 9.18181H12.5794Z" fill="#1D9BF0" />
                                    <path d="M14.2622 15C14.0413 15 13.8622 14.8209 13.8622 14.6V9.58181C13.8622 9.3609 14.0413 9.18181 14.2622 9.18181H17.4338C17.6547 9.18181 17.8338 9.3609 17.8338 9.58181V9.92386C17.8338 10.1448 17.6547 10.3239 17.4338 10.3239H15.6685C15.4475 10.3239 15.2685 10.5029 15.2685 10.7239V11.117C15.2685 11.338 15.4475 11.517 15.6685 11.517H17.181C17.4019 11.517 17.581 11.6961 17.581 11.917V12.2619C17.581 12.4828 17.4019 12.6619 17.181 12.6619H15.6685C15.4475 12.6619 15.2685 12.841 15.2685 13.0619V14.6C15.2685 14.8209 15.0894 15 14.8685 15H14.2622Z" fill="#1D9BF0" />
                                </svg>
                            </a>
                            <a href="" className="hover:bg-bg-main rounded-full block p-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.5" y="4.5" width="17" height="5" rx="0.5" stroke="#1D9BF0" />
                                    <rect x="2.5" y="9.5" width="19" height="5" rx="0.5" stroke="#1D9BF0" />
                                    <rect x="2.5" y="14.5" width="14" height="5" rx="0.5" stroke="#1D9BF0" />
                                    <line x1="2.5" y1="2.5" x2="2.5" y2="21.5" stroke="#1D9BF0" stroke-linecap="round" />
                                </svg>
                            </a>
                            <a href="" className="hover:bg-bg-main rounded-full block p-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="9.5" stroke="#1D9BF0" />
                                    <circle cx="9" cy="10" r="1" fill="#1D9BF0" />
                                    <circle cx="15" cy="10" r="1" fill="#1D9BF0" />
                                    <path d="M16 14C15.7824 14.3931 15.4635 14.7502 15.0615 15.0511C14.6594 15.3519 14.1821 15.5906 13.6569 15.7534C13.1316 15.9162 12.5686 16 12 16C11.4314 16 10.8684 15.9162 10.3431 15.7534C9.81786 15.5906 9.34057 15.3519 8.93853 15.0511C8.53649 14.7502 8.21758 14.3931 8 14" stroke="#1D9BF0" stroke-linecap="round" />
                                </svg>
                            </a>
                            <a href="" className="hover:bg-bg-main rounded-full block p-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4H19C19.5523 4 20 4.44772 20 5V11.5278C20.3801 11.868 20.7166 12.2559 21 12.6822V5C21 3.89543 20.1046 3 19 3H4C2.89543 3 2 3.89543 2 5V18C2 19.1046 2.89543 20 4 20H11.5278C11.2534 19.6934 11.01 19.3584 10.8027 19H4C3.44772 19 3 18.5523 3 18V5C3 4.44772 3.44772 4 4 4Z" fill="#1D9BF0" />
                                    <circle cx="16" cy="16" r="4.5" stroke="#1D9BF0" />
                                    <line x1="2" y1="7.5" x2="21" y2="7.5" stroke="#1D9BF0" />
                                    <line x1="7.5" y1="2.5" x2="7.5" y2="4.5" stroke="#1D9BF0" stroke-linecap="round" />
                                    <line x1="16.5" y1="2.5" x2="16.5" y2="4.5" stroke="#1D9BF0" stroke-linecap="round" />
                                    <path d="M16 14L16 15.9172C16 15.9702 16.0211 16.0211 16.0586 16.0586L18 18" stroke="#1D9BF0" stroke-linecap="round" />
                                </svg>
                            </a>
                            <a href="" className="hover:bg-bg-main rounded-full block p-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.8378 5.41357C20.7837 7.70536 20.725 10.5162 19.4771 13.2876C18.2247 16.069 15.7992 18.7303 13.1825 20.5619L12.2867 21.189C12.1146 21.3095 11.8854 21.3095 11.7133 21.189L10.8175 20.5619C8.20082 18.7302 5.77525 16.069 4.52285 13.2876C3.27496 10.5161 3.21634 7.70534 5.16225 5.41356C5.20342 5.36507 5.24354 5.32144 5.2825 5.28249C7.06409 3.50089 9.48045 2.5 12 2.5C14.5196 2.5 16.9359 3.50089 18.7175 5.28249L19.0711 4.92893L18.7175 5.28249C18.7565 5.32144 18.7966 5.36508 18.8378 5.41357Z" stroke="#1D9BF0" />
                                    <circle cx="12" cy="10" r="3.5" stroke="#1D9BF0" />
                                </svg>
                            </a>
                        </div>
                        <div className="flex-none">
                            <button className="text-white bg-primary-high py-1.5 px-5 rounded-full font-bold">Tweet</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="border-t border-t-border-main">
                <EachTweet />
                <EachTweet />
                <EachTweet />
                <EachTweet />
                <EachTweet />
                <EachTweet />
                <EachTweet />
                <EachTweet />
                <EachTweet />
                <EachTweet />
                <EachTweet />
            </div>

        </div>
    )
}
