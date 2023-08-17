import Header from "../../components/Header";
import { useIndicatorListQuery } from "../../queries/useIndicatorListQuery";
import Loader from "../../components/Loader";
import { Link, useNavigate } from "react-router-dom";
import Swap from "../../components/swap";
import RenderIf from "../../components/RenderIf";
import { LuMapPin } from "react-icons/lu";

export default function App() {
  const { data: indicators, isLoading: isLoadingMeIndicators } =
    useIndicatorListQuery();

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="flex w-full items-center justify-center px-6">
        <div className="w-full mt-6 p-6 bg-white border border-gray-200 shadow">
          <h1 className="mb-2 font-semibold text-3xl tracking-tight text-gray-900">
            Projetos
          </h1>

          <Loader isLoading={isLoadingMeIndicators} />

          <RenderIf condition={!isLoadingMeIndicators}>
            <Swap
              condition={!!indicators?.content.results.length}
              WhenFalse={
                <div className="min-w-7xl mt-6 p-6 border border-gray-200 mb-8">
                  <span>Você não tem nenhum projeto atualmente.</span>
                </div>
              }
              WhenTrue={indicators?.content.results.map((indicator) => (
                <div
                  className="min-w-7xl mt-6 p-6 border border-gray-200 mb-8 bg-gray-50"
                  onClick={() => navigate(`/projeto/${indicator.id}`)}
                >
                  <h1 className="font-bold">{indicator.name.toUpperCase()}</h1>
                  <h4 className="font-medium mt-5 mb-5">
                    {indicator.description}
                  </h4>

                  <div className="flex items-center gap-2">
                    <LuMapPin className="text-zinc-500" />
                    <p className="text-zinc-500">{indicator.city}</p>
                  </div>
                </div>
              ))}
            />
          </RenderIf>

          <Link
            to="/criar/projeto"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Criar novo projeto
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
