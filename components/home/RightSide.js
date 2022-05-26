import EachTrend from "../menu/EachTrend";
import SearchBlock from "../partials/SearchBlock";

export default function RightSide() {
    return (
        <div className="mx-2 lg:ml-10 mb-10">
            <SearchBlock />

            <div className="bg-bg-main rounded-2xl pt-4 my-4">
                <h1 className="font-extrabold text-xl text-default-high mx-5">Trends for you</h1>
                <div className="mt-5">
                    <EachTrend />
                    <EachTrend />
                    <EachTrend />
                    <EachTrend />
                    <EachTrend />
                    <EachTrend />
                    <EachTrend />
                    <EachTrend />
                </div>

                <a href="" className="block text-primary-high hover:bg-bg-hover px-5 py-4 rounded-b-2xl text-sm font-medium">Show more</a>
            </div>

            <div className="text-sm text-default-medium flex flex-wrap space-x-3 p-3">
                <a href="" className="hover:underline"> Terms of Service  </a>
                <a href="" className="hover:underline">Privacy Policy  </a>
                <a href="" className="hover:underline">Cookie Policy  </a>
                <a href="" className="hover:underline">Accessibility  </a>
                <a href="" className="hover:underline">Ads info  </a>
                <a href="" className="hover:underline">More</a>
                <span className="ml-2">© 2022 Twitter, Inc.</span>
            </div>
        </div>
    )
}
