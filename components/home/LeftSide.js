import EachSidebarMenu from "../menu/EachSidebarMenu";

export default function LeftSide() {
    return (
        <div className="pr-10 fixed hidden lg:block">
            <div className="py-3 px-4">
                <a href="">
                    <svg width="30" height="30" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.6132 5.34841C24.7087 5.74924 23.7369 6.02007 22.7153 6.14249C23.7575 5.51849 24.557 4.52832 24.934 3.34966C23.959 3.92816 22.8789 4.34849 21.7295 4.57382C20.8087 3.59449 19.4978 2.98132 18.0462 2.98132C15.2598 2.98132 13 5.24116 13 8.02966C13 8.42399 13.0455 8.80749 13.13 9.17799C8.93424 8.96674 5.21733 6.95716 2.72783 3.90432C2.29449 4.65182 2.04533 5.51849 2.04533 6.44149C2.04533 8.19216 2.93691 9.73807 4.28999 10.6427C3.46233 10.6156 2.68449 10.3892 2.00416 10.0111V10.0761C2.00416 12.5212 3.74291 14.5611 6.05258 15.0247C5.62791 15.1396 5.18266 15.2002 4.72333 15.2002C4.39833 15.2002 4.08091 15.1699 3.77324 15.1114C4.41566 17.1156 6.27899 18.5759 8.48791 18.6149C6.75999 19.9691 4.58358 20.7762 2.21974 20.7762C1.81241 20.7762 1.41049 20.7523 1.01508 20.7057C3.24891 22.139 5.90091 22.9732 8.75007 22.9732C18.0342 22.9732 23.1097 15.2837 23.1097 8.61466C23.1097 8.39799 23.1042 8.17916 23.0945 7.96249C24.0803 7.24966 24.9362 6.36241 25.6111 5.35166L25.6132 5.34841Z" fill="#1D9BF0" />
                    </svg>
                </a>
            </div>
            <ul className="flex flex-col space-y-4 mt-6">
                <EachSidebarMenu name="Home" active="true">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6655 2.30103C11.8556 2.1299 12.1443 2.1299 12.3345 2.30103L21.0315 10.1284C21.3721 10.4349 21.1553 11 20.697 11H3.30298C2.84473 11 2.62789 10.4349 2.96849 10.1284L11.6655 2.30103Z" fill="#0F1419" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.33122 9C5.10545 9 4.16809 10.0926 4.35448 11.3041L5.73909 20.3041C5.88919 21.2798 6.72869 22 7.71584 22H16.2842C17.2713 22 18.1108 21.2798 18.2609 20.3041L19.6455 11.3041C19.8319 10.0926 18.8945 9 17.6688 9H6.33122ZM12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17Z" fill="#0F1419" />
                    </svg>
                </EachSidebarMenu>
                <EachSidebarMenu name="Explore">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.2917 2.16666L8.12502 23.8333" stroke="#101419" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M17.875 2.16666L15.7083 23.8333" stroke="#101419" strokeWidth="1.8" strokeLinecap="round" />
                        <line x1="22.9333" y1="9.56666" x2="3.06664" y2="9.56666" stroke="#101419" strokeWidth="1.8" strokeLinecap="round" />
                        <line x1="22.9333" y1="17.15" x2="3.06664" y2="17.15" stroke="#101419" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                </EachSidebarMenu>
                <EachSidebarMenu name="Notifications">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8333 1C14.5678 1 17.6587 3.90371 17.8916 7.63094L18.1664 12.027C18.239 13.1884 18.6 14.3135 19.2168 15.3003L19.8624 16.3333H1.80425L2.44989 15.3003C3.06666 14.3135 3.42768 13.1884 3.50027 12.027L3.77502 7.63094C4.00797 3.90372 7.09883 1.00001 10.8333 1Z" stroke="#101419" strokeWidth="2" />
                        <path d="M7 17C7 22 14.5 22 14.5 17" stroke="#101419" strokeWidth="2" />
                    </svg>
                </EachSidebarMenu>
                <EachSidebarMenu name="Messages">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3.06669" y="5.23334" width="19.8667" height="15.5333" rx="1.1" stroke="#101419" strokeWidth="1.8" />
                        <path d="M2.70835 8.125L12.1438 12.5944C12.6858 12.8511 13.3143 12.8511 13.8562 12.5944L23.2917 8.125" stroke="#101419" strokeWidth="1.8" />
                    </svg>
                </EachSidebarMenu>
                <EachSidebarMenu name="Bookmarks">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.33331 3.06667H19.6666C20.2742 3.06667 20.7666 3.55916 20.7666 4.16667V21.9425L14.072 16.5031C13.4474 15.9956 12.5526 15.9956 11.928 16.5031L5.23331 21.9425V4.16667C5.23331 3.55916 5.7258 3.06667 6.33331 3.06667Z" stroke="#101419" strokeWidth="1.8" />
                    </svg>
                </EachSidebarMenu>
                <EachSidebarMenu name="List">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3.06669" y="3.06667" width="19.8667" height="19.8667" rx="1.1" stroke="#101419" strokeWidth="1.8" />
                        <line x1="6.31669" y1="7.76667" x2="19.6834" y2="7.76667" stroke="#101419" strokeWidth="1.8" strokeLinecap="round" />
                        <line x1="6.31669" y1="12.1" x2="19.6834" y2="12.1" stroke="#101419" strokeWidth="1.8" strokeLinecap="round" />
                        <line x1="6.31669" y1="16.4333" x2="12.1" y2="16.4333" stroke="#101419" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                </EachSidebarMenu>
                <EachSidebarMenu name="Profile">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4334 6.50001V9.13096C16.4334 10.1724 15.5891 11.0167 14.5476 11.0167H11.4524C10.4109 11.0167 9.56669 10.1724 9.56669 9.13096V6.50001C9.56669 4.60383 11.1038 3.06667 13 3.06667C14.8962 3.06667 16.4334 4.60383 16.4334 6.50001Z" stroke="#101419" strokeWidth="1.8" />
                        <path d="M3.23549 22.0099C3.36178 21.3336 3.55828 20.6707 3.82282 20.032C4.32201 18.8268 5.0537 17.7318 5.97609 16.8094C6.89849 15.887 7.99353 15.1553 9.1987 14.6561C10.4039 14.1569 11.6956 13.9 13 13.9C14.3045 13.9 15.5962 14.1569 16.8013 14.6561C18.0065 15.1553 19.1016 15.887 20.024 16.8094C20.9463 17.7318 21.678 18.8268 22.1772 20.032C22.4418 20.6707 22.6383 21.3336 22.7646 22.0099C22.8426 22.4278 22.4972 22.9333 21.8334 22.9333L4.16669 22.9333C3.50288 22.9333 3.15745 22.4278 3.23549 22.0099Z" stroke="#101419" strokeWidth="1.8" />
                    </svg>
                </EachSidebarMenu>
                <EachSidebarMenu name="More">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13" r="9.93333" stroke="#101419" strokeWidth="1.8" />
                        <ellipse cx="8.66665" cy="13" rx="1.08333" ry="1.08333" fill="#101419" />
                        <circle cx="13" cy="13" r="1.08333" fill="#101419" />
                        <circle cx="17.3333" cy="13" r="1.08333" fill="#101419" />
                    </svg>
                </EachSidebarMenu>
            </ul>

            <button className="text-white bg-primary-high py-4 rounded-full w-full mt-5 font-bold">Tweet</button>
        </div>
    )
}
