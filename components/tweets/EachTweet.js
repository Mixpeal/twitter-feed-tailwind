import MainAvatar from "../avatars/MainAvatar";

export default function EachTweet() {
    return (
        <div className="px-4 py-5 border-b border-b-border-main cursor-pointer hover:bg-bg-hover">
            <div className="flex">
                <MainAvatar />
                <div className="w-full">
                    <div className="flex space-x-2 items-center justify-between">
                        <div className="flex space-x-2 items-center">
                            <a href="" className="flex space-x-2 items-center hover:underline">
                                <span className="font-semibold text-default-high">Andrew Gazdecki</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5427 2.89974C11.1713 1.25563 8.8287 1.25563 8.45732 2.89974C8.21663 3.96528 6.99385 4.47177 6.0702 3.88851C4.64504 2.98856 2.98857 4.64503 3.88852 6.07019C4.47178 6.99384 3.96529 8.21662 2.89974 8.45731C1.25564 8.82869 1.25564 11.1713 2.89974 11.5427C3.96529 11.7834 4.47178 13.0061 3.88852 13.9298C2.98857 15.355 4.64504 17.0114 6.0702 16.1115C6.99385 15.5282 8.21663 16.0347 8.45732 17.1002C8.8287 18.7444 11.1713 18.7444 11.5427 17.1002C11.7834 16.0347 13.0061 15.5282 13.9298 16.1115C15.355 17.0114 17.0114 15.355 16.1115 13.9298C15.5282 13.0061 16.0347 11.7834 17.1003 11.5427C18.7444 11.1713 18.7444 8.82869 17.1003 8.45731C16.0347 8.21662 15.5282 6.99384 16.1115 6.07019C17.0114 4.64503 15.355 2.98856 13.9298 3.88851C13.0061 4.47177 11.7834 3.96528 11.5427 2.89974ZM8.8626 11.8763L9.25628 12.3813L9.65077 11.8769L13.1308 7.42764L12.3431 6.81155L9.25758 10.7565L8.13124 9.31171L7.34259 9.92655L8.8626 11.8763Z" fill="#1D9BF0" />
                                </svg>
                                <span className="text-default-medium">@agazdecki</span>
                            </a>
                            <span className="text-default-medium">•</span>
                            <span className="text-default-medium">May 20</span>
                        </div>
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6.5" cy="12.5" r="1.5" fill="#526471" />
                                <circle cx="12.5" cy="12.5" r="1.5" fill="#526471" />
                                <circle cx="18.5" cy="12.5" r="1.5" fill="#526471" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-2">Teams that laugh together and trust each other build the best startups.</div>
                    <div className="flex mt-4 space-x-8">
                        <button className="flex space-x-2 items-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.91667 2.16666H12.0833C15.259 2.16666 17.8333 4.74103 17.8333 7.91666C17.8333 9.54751 17.444 10.5924 16.8289 11.4779C16.3479 12.1705 15.7364 12.7625 15.0068 13.4688C14.7636 13.7043 14.5072 13.9525 14.2382 14.2213L10.5 17.6197V14.5667C10.5 14.0696 10.0971 13.6667 9.60001 13.6667H7.91667C4.74103 13.6667 2.16667 11.0923 2.16667 7.91666C2.16667 4.74103 4.74103 2.16666 7.91667 2.16666Z" stroke="#526471" />
                            </svg>
                            <span className="text-default-medium">25.9K</span>
                        </button>
                        <button className="flex space-x-2 items-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33334 3.33276L3.33334 12.6667C3.33334 14.8758 5.1242 16.6667 7.33334 16.6667L13.3333 16.6667" stroke="#526471" strokeLinecap="round" />
                                <path d="M5.20221 5.10072L3.43445 3.33296L1.66668 5.10073" stroke="#526471" strokeLinecap="round" />
                                <path d="M16.6667 16.6667L16.6667 7.33333C16.6667 5.12419 14.8758 3.33333 12.6667 3.33333L6.66667 3.33333" stroke="#526471" strokeLinecap="round" />
                                <path d="M14.7978 14.8993L16.5656 16.667L18.3333 14.8993" stroke="#526471" strokeLinecap="round" />
                            </svg>
                            <span className="text-default-medium">32.9K</span>
                        </button>
                        <button className="flex space-x-2 items-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.16757 17.5493C9.67329 17.8817 10.3267 17.8817 10.8324 17.5493C13.263 15.9521 18 12.8167 18 6.93775C18 5.15725 17.5322 3.88291 16.74 3.06516C15.9446 2.24422 14.8897 1.95318 13.8649 2.00605C12.8462 2.0586 11.8274 2.44973 11.0337 3.03397C10.6316 3.3299 10.2716 3.68776 10 4.0919C9.72841 3.68776 9.36837 3.3299 8.96631 3.03397C8.17255 2.44973 7.15381 2.0586 6.13513 2.00605C5.11029 1.95318 4.05539 2.24422 3.26003 3.06516C2.46778 3.88291 2 5.15725 2 6.93776C2 12.8167 6.73699 15.9521 9.16757 17.5493Z" stroke="#526471" />
                            </svg>
                            <span className="text-default-medium">216.9K</span>
                        </button>
                        <button>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.08334 10.4167L2.08334 15.9167C2.08334 17.0213 2.97877 17.9167 4.08334 17.9167L15.9167 17.9167C17.0212 17.9167 17.9167 17.0213 17.9167 15.9167L17.9167 10.4167" stroke="#526471" strokeLinecap="round" />
                                <path d="M13.5606 5.97045L10.0726 2.5708C10.0327 2.53186 9.9686 2.53314 9.93024 2.57364L6.71243 5.97045" stroke="#526471" strokeLinecap="round" />
                                <path d="M10 4L10 16" stroke="#526471" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
