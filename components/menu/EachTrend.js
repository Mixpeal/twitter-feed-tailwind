export default function EachTrend() {
    return (
        <a href="" className="hover:bg-bg-hover block">
            <div className="px-5 py-2 flex justify-between">
                <div>
                    <div className="text-sm text-default-medium">Sci-fi & fantasy TV . Trending</div>
                    <div className="text-sm text-default-high font-bold">#StrangerThings</div>
                    <div className="text-sm text-default-medium">8,258 Tweets</div>
                </div>
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6.5" cy="12.5" r="1.5" fill="#526471" />
                        <circle cx="12.5" cy="12.5" r="1.5" fill="#526471" />
                        <circle cx="18.5" cy="12.5" r="1.5" fill="#526471" />
                    </svg>
                </button>
            </div>
        </a>
    )
}
